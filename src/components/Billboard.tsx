

import useBillboard from '@/hooks/useBillboard'
import React from 'react'
import { CiCircleInfo } from "react-icons/ci";


const Billboard =async () => {

    const data =await useBillboard();
    console.log(data);
    const url = data?.videoPath;
    const thumbnail = data?.thumbnail;
    const title = data?.title;
    const description = data?.description;
    


  return (
   <div className = "relative h-[56.25vh]">
     <video poster = {thumbnail} className="object-cover w-full h-full brightness-[60%] " src={url} autoPlay loop muted/>

    <div className = "absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
      <h1 className = "text-white font-montserrat font-bold md:text-5xl h-full w-[50%] lg:text-6xl drop-shadow-xl"> {title}</h1>
      <p className = "text-white font-montserrat font-semibold text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:[80%] lg:w-[50%]"> {description}</p>
      <div className = "flex items-center mt-3 md:mt-4 gap-3">
        <button className ="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold font-montserrat flex items-center hover:bg-opacity-20 transition gap-3">
        <CiCircleInfo />
          More Info
        </button>
      </div>
    </div>

   </div>
   
  

  )
}

export default Billboard