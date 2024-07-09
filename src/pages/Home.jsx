import React from 'react';
import HeroBannerImage from '../assets/banner.png';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="relative p-5 mt-[30px] sm:ml-[20px] lg:mt-[100px] flex flex-col lg:flex-row">
      <div className="flex-1 relative">
        <div className="font-semibold text-2xl">
          <p>¡Hola! Fitness Freaks</p>
        </div>

        <div className="font-bold mt-7 mb-6 text-[40px] lg:text-[44px]">
          <p className='text-blue-400 pt-6'>Target, Tone </p> 
          <p className='text-blue-400 pt-9'>and Transform</p>
        </div>

        <div className="text-lg leading-[35px] mb-4">
          <p className='pt-6'>
            Welcome to SwoleMate, where every workout is an adventure <br/>
            Choose your workout type, target muscle group, and ultimate fitness goal,<br/>
            and we'll whip up a fresh, exciting routine for you.</p>

          <p className='pt-5'>Say goodbye to boring exercises and hello to fun,<br/> dynamic workouts that keep you pumped.<br/>
            Let’s make fitness a blast and crush those goals together!
          </p>
        </div>
        
        <div className='mt-10'>
          <Button func={() => window.location.href = '#hero'} text={"Let's Go!!!"} />
        </div>

        <div className="font-bold text-blue-400 opacity-10 hidden lg:block text-[200px] absolute left-0 lg:bottom-[50px]">
          {/* Hidden on small and medium screens */}
          <p className="hidden sm:block md:block">Exercise</p>
        </div>
      </div>

      <div className="flex-1 lg:flex lg:justify-end lg:items-end lg:ml-10 relative hidden lg:block">
        {/* Hidden on small and medium screens */}
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img lg:mr-4 lg:mt-[-80px]" />
      </div>
    </div>
  );
};

export default Home;

