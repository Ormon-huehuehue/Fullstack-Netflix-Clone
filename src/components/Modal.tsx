import React from 'react'
import Backdrop from './Backdrop'
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosClose } from "react-icons/io";
import PlayButton from './PlayButton';


const popUp = {
    hidden:{
        scale : 0,
        opacity:0
    },
    visible:{
        scale:1,
        opacity:1,
        transition:{
            duration:0.1,
            ease : "easeIn"
        }
    } 
}

interface ModalProps{
    movieId : string,
    title: string,
    description: string,
    thumbnail: string,
    url: string,
    handleClose : React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({handleClose, movieId, title, description, thumbnail, url}:ModalProps)=>{

    

  return (
    <AnimatePresence >
    <Backdrop onClick={handleClose}>
    <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={popUp}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        className="bg-zinc-900 w-1/2 h-1/2 rounded-[5%] relative overflow-hidden" // Added relative here
    >
    <div className="w-full h-full">
            <video
                poster= {thumbnail}
                src={url}
                autoPlay
                loop
                muted
                className="object-cover w-full h-3/4 "
            />
            <motion.div className="cursor-pointer bg-zinc-800 rounded-full inline-block absolute top-4 right-4" onClick={handleClose}
            whileHover={{scale:1.1}}
            whileTap = {{scale:0.9}}>
            <IoIosClose className="text-white" size={40} />
            </motion.div>
            <div className="absolute bottom-10 left-7"> 
            <PlayButton movieId={movieId}/>
            </div>
        
            <div className = "text-white text-3xl md:text-4xl h-full lg:text-2xl font-bold mb-8 font-montserrat ">
            <p className  = "bottom-[27%] px-10 absolute"> {title}</p>
            <p className  = "bottom-[19%] px-5 absolute text-lg font-normal"> {description}</p>

            </div>

        </div>
    </motion.div>
    </Backdrop>
    </AnimatePresence>
  )
}

export default Modal