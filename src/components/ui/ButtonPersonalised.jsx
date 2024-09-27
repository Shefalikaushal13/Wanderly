import React from 'react';


export default function Button(props) {
  const { text, func, isLoading } = props;
  
  return (
    <button
      disabled={isLoading}
      onClick={func}
      className={`px-8 mx-auto py-2 rounded-md border-[2px] bg-slate-950 border-orange-700 border-solid orangeShadow duration-200 
      ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`} 
    >
        <p>{text}</p>
    </button>
  );
}
