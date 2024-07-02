"use client"
import React from 'react'
import { IoIosPlay } from "react-icons/io";
import FavouriteButton from './FavouriteButton';
import { movieInterface } from './MovieList';

interface MovieCardProps{
    thumbnail: string,
    _id : string,
    genre : string
}


const MovieCard= ({thumbnail, _id, genre} : MovieCardProps  ) => {

    console.log("thumbnail", thumbnail)

  return (
    <div className = "group bg-zinc-900 col-span relative h-[12vw]">
        <img src= {thumbnail} alt="" 
        className = "cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-100 w-full h-[12vw]"/>
        <div className= "opacity-0 absolute top-0 duration-100 z-10 invisible sm:visible delay-100 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 ">
            <img src={thumbnail}
            className ="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"/>
            <div className = "z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md  rounded-b-md ">
                <div className = "flex flex-row item-center gap-3">
                    <div onClick={()=>{}}
                    className = "cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                        <IoIosPlay size={20} />
                    </div>
                    <FavouriteButton movieId = {_id} />
                </div>

                <p className = "text-green-400 font-semibold font-montserrat mt-4">
                    New  <span className = "text-white"> 2024</span>
                </p>
                <div className = "flex mt-4 gap-2 items-center">
                    <p className = "text-white text-[10px] lg:text-sm">{genre}</p>
                </div>

            </div>
        </div>
        

    </div>
  )
}

export default MovieCard