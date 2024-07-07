import React, { ReactNode, MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }: { children: ReactNode; onClick: MouseEventHandler<HTMLDivElement> }) => {
  return (
    <motion.div 
    className = "fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center bg-opacity-50 z-10"
    onClick = {onClick}

    initial={{opacity :0}}
    animate={{opacity :1}}
    exit={{opacity :0}}
    >
        {children}
    </motion.div>
  );
};


export default Backdrop;