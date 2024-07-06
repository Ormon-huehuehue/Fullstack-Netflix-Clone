import Link from 'next/link';
import React from 'react'
import { IoIosPlay } from "react-icons/io";

interface PlayButtonProps{
    movieId: string
}

const PlayButton = ({movieId} : PlayButtonProps) => {




  return (
    <Link href = {`/watch/${movieId}`}>
    
        <button className ="bg-white text-black bg-opacity-100 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold font-montserrat flex items-center hover:bg-opacity-20 transition gap-2 ">
            <IoIosPlay />
            <p> Play </p>
        </button>
    </Link>
  )
}

export default PlayButton