import React, { useEffect } from 'react';
import logo from './../assets/logowanderly.png'
import Button from './ui/ButtonPersonalised';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./../components/ui/popover"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate=useNavigate();

  const user=JSON.parse(localStorage.getItem('user'));
  useEffect(()=>{
    console.log(user);
  })

  const signup=useGoogleLogin({
    onSuccess:(codeResp)=>getUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  const getUserProfile=(tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept:'Application/json'
      }
    }).then((resp)=>{
      console.log(resp);
      localStorage.setItem('user',JSON.stringify(resp.data));
    })
  }


  return (
    <nav className="flex justify-between items-center px-6 bg-gray-800">
      <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
        <img src={logo} alt="logo" className="w-20 h-20 mr-3" />
        <span className="text-white text-xl font-bold">WANDERLY</span>
      </div>

      <div>
        {user ?

          <div className='text-white focus:outline-none flex justify-end items-center mr-6 gap-6'>
            <a href='/trip-generator'>
              <Button text="+ Create Trip" />
            </a>

            <a href='/my-trips'>
            <Button text="My Trips" />
            </a>

            <Popover>
              <PopoverTrigger><img src={user?.picture} className='h-[35px] w-[35px] rounded-full' /></PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>

          </div> :
          <div className="text-white focus:outline-none flex justify-end items-center mr-6">
            <Button func={signup} text="Sign Up" />
          </div>
        }
      </div>

    </nav>
  );
}

export default Navbar;

