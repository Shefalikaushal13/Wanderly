import { Link } from 'react-router-dom';
import { GetPlaceDetail, IMG_REF_URL } from './../utils/GlobalAPI';
import React, { useEffect, useState } from 'react';

function MyTripsCard({ trip }) {
  const [imgUrl, setImgUrl] = useState();

  const location = trip?.userChoice?.location?.label;

  useEffect(() => {
    if (location) {
      GetPlaceImg();
    }
  }, [location]);

  const GetPlaceImg = async () => {
    try {
      const data = {
        textQuery: location,
      };

      // Make the API call and handle response
      const result = await GetPlaceDetail(data);

      const photo = result?.data?.places?.[0]?.photos?.[3]?.name;
      if (photo) {
        const imgUrl = IMG_REF_URL.replace('{NAME}', photo);
        setImgUrl(imgUrl);
      } else {
        console.error('No photo available for this place');
      }
    } catch (error) {
      console.error('Error fetching place image:', error.response || error.message);
    }
  };

  return (
      <Link to={'/view-trip/' + trip?.id}>
          <div className='p-4 rounded-xl hover:scale-105 transition-all hover:shadow-slate-500 shadow-xl cursor-pointer'>

              <img
                  src={imgUrl ? imgUrl : '/infosection.jpg'}
                  alt='Trip Image'
                  className='rounded-xl object-cover w-full h-48'
              />
              <div className='mt-3'>
                  <h2 className='text-white text-lg font-bold'>
                      {location || 'No Location Available'}
                  </h2>
                  <h2 className='text-sm'>
                      {trip?.userChoice?.noOfDays} Days trip with {trip?.userChoice?.budget} Budget
                  </h2>
              </div>
          </div>
      </Link>
  );
}

export default MyTripsCard;
