import React, { useEffect, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/ui/ButtonPersonalised';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { AI_prompt, selectBudget, selectTravelers } from '../utils/Options';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { chatSession } from '../utils/AIModel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'; //axios is an HTTP client used to make API calls
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../index.css';
 




function Header(props) {
  const { index, title } = props;
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-orange-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
    </div>
  );
}

export default function Generator(props) {
  const[place,setPlace]=useState();

  const[formData, setformData]=useState([]);

  const[openDialog, setOpenDialog]=useState(false);

  const[loading,setLoading]=useState(false);

  const navigate=useNavigate();

  const handleInputChange=(name,value)=>{
    setformData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const signup=useGoogleLogin({
    onSuccess:(codeResp)=>getUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  const OnGenerateTrip=async()=>{

    const user=localStorage.getItem('user');

    if(!user){
      setOpenDialog(true);
      return;
    }

    if(formData?.noOfDays>7 || formData?.noOfDays<1 && !formData?.location |!formData?.budget|| !formData?.numOfPeople){
      toast.error('Please fill all the fields')
      return;
    }

    setLoading(true);
    const FINAL_PROMPT=AI_prompt
    .replace('{location}',formData?.location?.label)
    .replace('{totalDays}',formData?.noOfDays)
    .replace('{travelers}',formData?.numOfPeople)
    .replace('{budget}',formData?.budget)
    .replace('{totalDays}',formData?.noOfDays)


    const result=await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--",result?.response?.text());
    saveAITrip(result?.response?.text());
    setLoading(false);
  };

  const saveAITrip=async(tripData)=>{
    setLoading(true);
    const user= JSON.parse(localStorage.getItem('user'));
    const docID=Date.now().toString();

    try{
      await setDoc(doc(db,"AITrips",docID),{
        userChoice:formData,
        tripInfo:JSON.parse(tripData),
        userEmail:user?.email,
        id:docID
      });
    setLoading(false);
    navigate('/view-trip/' + docID);
    console.log("Trip ID:", docID);
    console.log("User Choice:", formData);
    console.log("Email ID:", user?.email);
  } catch(error){
    console.log('Error saving trip:', error);
    }
  };

  const getUserProfile=(tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept:'Application/json'
      }
    }).then((resp)=>{
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
      setOpenDialog(false);
      OnGenerateTrip();
    })
  }


  return (
    <SectionWrapper id={'generate'} header={"Generate your Dream Trip"} title={["Tell us your", "Travel","Preferences 🏔️🏖️"]}>
      <Header index={'01'} title={'Pick a destination'} />
      <div className='rounded-lg flex flex-col px-4 py-3'>
        <GooglePlacesAutocomplete
          textInputProps={{ text: 'black', }}
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
          place,
          onChange:(v)=>{setPlace(v);
          handleInputChange('location',v)
          }
          }}
        />
      </div>

      <Header index={'02'} title={'How many days do you plan on staying?'} />
      <div className='flex flex-col px-4 py-3'>
        <input type="number" id="numOfDays" step="1" placeholder='E.g. 3'
          onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          className='bg-white text-slate-950 rounded-md flex flex-col h-10 p-2'
        ></input>
      </div>

      <Header index={'03'} title={'Who do you plan on travelling with?'}/>
      <div className='grid grid-cols-4 sm:grid-cols-4 gap-4 duration-200 px-4 py-3 text-black' >
        {selectTravelers.map((item,index)=>(
          <div key={index}
          onClick={()=>handleInputChange('numOfPeople',item.people)}
          className={`p-3 cursor-pointer border-2 rounded-lg bg-white
            ${formData?.numOfPeople==item.people && 'shadow-slate-500 shadow-xl border-4 border-orange-400'}
          `}>
            <h2 className='text-4xl'>{item.icon}</h2> 
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-slate-800'>{item.desc}</h2>
          </div>
        ))}
      </div>

      <Header index={'04'} title={'What is your Budget?'}/>
      <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 duration-200 px-4 py-3 text-black' >
        {selectBudget.map((item,index)=>(
          <div key={index}
          onClick={()=>handleInputChange('budget',item.title)}
           className={`p-3 cursor-pointer border-2 rounded-lg  bg-white
           ${formData?.budget==item.title&& 'shadow-slate-500 shadow-xl border-4 border-orange-400'}
           `}>
            <h2 className='text-4xl'>{item.icon}</h2> 
            <h2 className='font-bold text-lg'>{item.title}</h2>
            <h2 className='text-sm text-slate-800'>{item.desc}</h2>
          </div>
        ))}
      </div>

      <Button
       func={OnGenerateTrip}
       text={'Generate Trip'}
       ></Button>
      
      <Dialog open={openDialog} className='bg-slate-950'>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src='/logowanderly.png' className='h-16 w-16'/>
              <h2 className='font-bold text-lg mb-4'> Sign Up to Wanderly using Google Authentication</h2>
              <Button
               func={signup}
               text={"Sign Up With Google"}/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


    </SectionWrapper>
  );
}
