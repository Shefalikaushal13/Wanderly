import { GetPlaceDetail, IMG_REF_URL } from './../utils/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HotelCard({hotel}) {

  const[imgUrl,setImgUrl]=useState();

  useEffect(()=>{
    hotel&&GetPlaceImg();
  },[hotel])

  const GetPlaceImg=async()=>{
    const data={
      textQuery:hotel?.name
    }

    const result=await GetPlaceDetail(data).then(resp=>{
      const imgUrl=IMG_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setImgUrl(imgUrl);
    })
  }

  return (
      <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.name + " " + hotel?.address} target='_blank'>

          <div className='rounded-xl hover:scale-105 transition-all cursor-pointer hover:shadow-slate-500 shadow-xl h-[325px]'>
              <img src={imgUrl?imgUrl:'/infosection.jpg'} className='rounded-xl h-[180px] w-full object-cover ' />
              <div className='my-3 mt-2 flex flex-col gap-2'>
                  <h2 className='text-white font-medium'>{hotel?.name}</h2>
                  <h2 className='text-xs text-gray-300'>📍 {hotel?.address}</h2>
                  <h2 className='text-sm text-white'>🪙 {hotel?.price}</h2>
                  <h2 className='text-sm text-white'>⭐ {hotel?.rating}</h2>
              </div>

          </div>
      </Link>
  )
}
