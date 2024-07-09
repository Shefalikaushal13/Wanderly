import React from 'react'
import Button from './Button'


export default function Hero() {
  return (
    <div id={'hero'} className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px]
    w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p className='text-xl'>GET READY TO BECOME YOUR OWN...</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400' >mate</span></h1>
      </div>

      <p className='text-lg font-light'>I , hereby accept the challenge and declare myself a <span className='text-blue-400 font-medium'>certified swolemate!</span><br/>
       Biceps be pumpin', glutes be jumpin', and my dream physique is comin' for sure. So buckle up, buttercup, 'cause it's time to <span className='text-blue-400 font-medium'>crush every workout</span> and get those gains raining like confetti! <br/>
       I am ready to make the iron cry and turn this bod into a <span className='text-blue-400 font-medium'> masterpiece,</span> one rep at a time!</p>
       <Button func={() =>{
          window.location.href = '#generate'
       }} text={"Accept & Begin"}></Button>
    </div>
  ) 
}
