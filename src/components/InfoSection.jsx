import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { FaShareNodes } from "react-icons/fa6";
import { GetPlaceDetail, IMG_REF_URL } from './../utils/GlobalAPI';


function InfoSection({ trip }) {
  const[imgUrl,setImgUrl]=useState();

  useEffect(() => {
    console.log('Trip Data:', trip); 
  }, [trip]);

  useEffect(()=>{
    trip&&GetPlaceImg();
  },[trip])

  const GetPlaceImg=async()=>{
    const data={
      textQuery:trip?.userChoice?.location?.label
    }

    const result=await GetPlaceDetail(data).then(resp=>{
      console.log(resp.data.places[0].photos[4].name);
      const imgUrl=IMG_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setImgUrl(imgUrl);
    })
  }
  return (
    <div>
      <img src={imgUrl?imgUrl:'/infosection.jpg'} className='h-[240px] w-full object-cover rounded-md' />
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='text-white font-bold text-2xl mt-4'>{trip?.userChoice?.location?.label}</h2>
          <div className='flex gap-5'>
            <h2 className='p-1 px-3 mt-2 bg-gray-600 rounded-full text-white text-xs md:text-md'>📆{trip?.userChoice?.noOfDays} Days</h2>
            <h2 className='p-1 px-3 mt-2 bg-gray-600 rounded-full text-white text-xs md:text-md'>💰{trip?.userChoice?.budget} Budget</h2>
            <h2 className='p-1 px-3 mt-2 bg-gray-600 rounded-full text-white text-xs md:text-md'>👥 Number of People: {trip?.userChoice?.numOfPeople}</h2>
          </div>
        </div>
        <Button><FaShareNodes /></Button>
      </div>
    </div>
  )
}

export default InfoSection
