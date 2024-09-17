import React from 'react'

export default function Button(props) {
    const{text,func,loading}=props
  return (
    <button
     disbale={loading}
     onClick={func}
     className='px-8 mx-auto py-2 rounded-md border-[2px] bg-slate-950 border-orange-700 border-solid orangeShadow duration-200'>
     <p>{text}</p>
    </button>
  )
}
