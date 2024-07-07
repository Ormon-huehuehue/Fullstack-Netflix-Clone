"use client"

import React, {useState} from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { motion } from 'framer-motion';
import Modal from './Modal';

interface MoreInfoButtonProps{
  movieId : string,
  title: string,
  description: string,
  thumbnail: string,
  url: string
}

const MoreInfoButton = ({movieId, title, description, thumbnail, url} : MoreInfoButtonProps) => {

  const [modalOpen, setModalOpen] = useState(false);
  const close = ()=> setModalOpen(false);
  const open = ()=> setModalOpen(true);


  return (
    <div>
      <motion.button
      whileHover={{scale:1.1}}
      whileTap = {{scale:0.9}}

      onClick ={()=> (modalOpen ? close() : open())}
      

      className ="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold font-montserrat flex items-center  gap-3">
          <CiCircleInfo />
            More Info
      </motion.button>



    {modalOpen && <Modal handleClose={close}
    movieId = {movieId} url = {url} thumbnail = {thumbnail} title = {title} description = {description}  />}

    </div>

  )
}

export default MoreInfoButton