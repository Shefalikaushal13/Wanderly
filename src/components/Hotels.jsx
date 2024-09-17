import React from 'react'
import HotelCard from './HotelCard'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {trip?.tripInfo?.hotel_options?.map((hotel,index)=>(
                <HotelCard hotel={hotel}/>

            ))}
        </div>
      
    </div>
  )
}

export default Hotels
