import useBillboard from '@/hooks/useBillboard'
import React from 'react'
import PlayButton from './PlayButton';

const Billboard =async () => {
    const data =await useBillboard();
    const url = data?.videoPath;
    const thumbnail = data?.thumbnail;
    const title = data?.title;
    const description = data?.description;
    const movieId = data?._id;
    


  return (
   <div className = "relative h-[56.25vh]">
     <video poster = {thumbnail} className="object-cover w-full h-full brightness-[60%] " src={url} autoPlay loop muted/>
    <div className = "absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
      <h1 className = "text-white  font-bold md:text-5xl h-full w-[50%] lg:text-6xl drop-shadow-xl font-montserrat"> {title}</h1>
      <p className = "text-white font-montserrat text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:[80%] lg:w-[50%]"> {description}</p>
      <div className = "flex items-center mt-3 md:mt-4 gap-3">
        <PlayButton movieId = {movieId}/>
      </div>
    </div>
   </div>
  )
}

export default Billboard