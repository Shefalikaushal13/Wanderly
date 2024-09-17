import MyTripsCard from './../components/MyTripsCard';
import { db } from './../utils/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function MyTrips() {
    const navigate=useNavigate();

    const[userTrips, setUserTrips]=useState([]);
    
    useEffect(()=>{
        GetUserTrips();
    },[])

    const GetUserTrips=async()=>{
        const user=JSON.parse(localStorage.getItem('user'))
        if(!user){
            navigate('/');
            return;
        }

        setUserTrips([]);
        const q=query(collection(db,'AITrips'),where('userEmail','==',user?.email));
        const querySnapshot=await getDocs(q);

        const trips=[];
        querySnapshot.forEach((doc)=>{
            console.log(doc.id,"=>",doc.data());
            trips.push(doc.data());
        });
        setUserTrips(trips);
    };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 cl:px-72 px-5 mt-10 '>
        <h2 className='text-white font-bold text-3xl'>My Trips</h2>

        <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
            {userTrips.length>0 ?(
                userTrips.map((trip,index)=>(
                    <MyTripsCard trip={trip}/>
                ))
            ):(
                <p className='text-white'>No trip</p>
            )}
        </div>
    </div>
  );
}

export default MyTrips
