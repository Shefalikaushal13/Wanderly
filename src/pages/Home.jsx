import React from 'react';
import HeroBannerImage from '../assets/bannerimage.jpeg';
import Button from '../components/ui/ButtonPersonalised';
import TextAnimator from './../utils/TextAnimator';

const Home = () => {

  return (
    <div className="relative p-2 mt-[30px] sm:ml-[20px] lg:mt-[100px] flex flex-col lg:flex-row h-full">
      <div className="flex-1 relative">
        <div className="font-semibold text-2xl ml-4 -mt-8">
          <TextAnimator/>
        </div>

        <div className="font-bold mt-7 mb-6 text-[40px] lg:text-[44px] ml-4">
          <p className='text-orange-600 pt-6'>Discover, Experience </p> 
          <p className='text-orange-600 pt-9'>and Inspire</p>
        </div>

        <div className="text-lg leading-[35px] mb-4 ml-4">
          <p className='pt-6'>
            Welcome to Wanderly, your one-stop shop<br/>
            for crafting unforgettable adventures. <br/>
            We'll turn your travel dreams into reality, one itinerary at a time.<br/></p>

          <p className='pt-8'>Wanderly is your personal travel planner, <br/>
          turning your dream vacations into reality.<br/>
          With just a few clicks, you can create custom itineraries <br/>
          tailored to your interests, budget, and travel style.<br/>
          From exploring bustling cities to relaxing on pristine beaches,<br/>
          Wanderly has you covered.<br/>
          Let us handle the planning, so you can focus on the adventure!<br/>
          </p>
        </div>
        
        <div className='mt-10 ml-4'>
          <Button func={() => window.location.href = '/trip-generator'} text={"Get Started for Free!"} />
        </div>

        <div className="font-bold text-orange-600 opacity-10 hidden lg:block text-[200px] absolute left-[320px] lg:bottom-[80px]">
          {/* Moved up by increasing the bottom property */}
          <p className="hidden sm:block md:block mb-8">Travel</p>
        </div>

      </div>

      <div className="flex-1 lg:flex lg:justify-end lg:items-end lg:ml-10 relative hidden lg:block">
        {/* Hidden on small and medium screens */}
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img lg:mr-4 lg:mt-[-100px]" />
      </div>
    </div>
  );
};

export default Home;

