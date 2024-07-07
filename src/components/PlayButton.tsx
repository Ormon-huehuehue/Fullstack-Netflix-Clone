"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { IoIosPlay } from "react-icons/io";


interface PlayButtonProps{
    movieId: string
}

const PlayButton = ({movieId} : PlayButtonProps) => {

  return (
    <Link href = {`/watch/${movieId}`}>
    
        <motion.button 
        whileHover={{scale:1.1}}
        whileTap = {{scale:0.9}}
        
        className ="bg-white text-black bg-opacity-100 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold font-montserrat flex items-center   gap-2 ">
            <IoIosPlay />
            <p> Play </p>
        </motion.button>
    </Link>
  )
}

export default PlayButton