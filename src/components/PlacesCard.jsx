import React, { useEffect, useState } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { GetPlaceDetail, IMG_REF_URL } from './../utils/GlobalAPI';


function PlacesCard({ location, details, time, ticketPricing, travelTime }) {

  const[imgUrl,setImgUrl]=useState();

  useEffect(()=>{
    location&&GetPlaceImg();
  },[location])

  const GetPlaceImg=async()=>{
    const data={
      textQuery:location
    }

    const result=await GetPlaceDetail(data).then(resp=>{
      const imgUrl=IMG_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setImgUrl(imgUrl);
    })
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+location} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-slate-500 shadow-xl'>
      <img src={imgUrl?imgUrl:'/infosection.jpg'} className='w-[130px] h-[130px] rounded-xl object-cover '/>
      <div>
        <h2 className='font-bold text-lg text-orange-600'>{location}</h2>
        <h3>{time}</h3>
        <p className='text-sm'>{details}</p>
        <p className='text-sm mt-4'>Ticket Pricing: {ticketPricing}</p>
        <p className='text-sm mt-2'>Travel Time: {travelTime}</p>
        <Button size="sm" className=' mt-2 border border-solid border-orange-700'><FaMapLocationDot /></Button>
      </div>
    </div>
    </Link>
  )
}

export default PlacesCard
