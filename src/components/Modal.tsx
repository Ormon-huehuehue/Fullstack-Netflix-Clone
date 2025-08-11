import React from 'react'
import Backdrop from './Backdrop'
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosClose } from "react-icons/io";
import PlayButton from './PlayButton';

const popUp = {
    hidden:{
        scale : 0.8,
        opacity:0
    },
    visible:{
        scale:1,
        opacity:1,
        transition:{
            duration:0.3,
            ease : "easeOut"
        }
    } 
}

interface ModalProps{
    movieId : string,
    title: string,
    description: string,
    thumbnail: string,
    url: string,
    handleClose : (e: React.MouseEvent<HTMLElement>) => void
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
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-zinc-900 w-[90vw] max-w-4xl h-[80vh] max-h-[600px] rounded-lg relative overflow-hidden shadow-2xl"
    >
        {/* Video Section */}
        <div className="relative w-full h-2/3">
            <video
                poster={thumbnail}
                src={url}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
            />
            
            {/* Close Button */}
            <motion.button 
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-all duration-200" 
                onClick={handleClose}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
            >
                <IoIosClose className="text-white" size={24} />
            </motion.button>

            {/* Play Button */}
            <div className="absolute bottom-4 left-4"> 
                <PlayButton movieId={movieId}/>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-transparent">
            <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
        </div>
    </motion.div>
    </Backdrop>
    </AnimatePresence>
  )
}

export default Modal