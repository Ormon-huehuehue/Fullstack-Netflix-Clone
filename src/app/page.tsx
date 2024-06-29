"use server"

import React from 'react'

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';

const page =  () => {
  return (
    <div className="h-screen bg-black object-fill relative">
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar/>
      </div>
      <div className="absolute top-0 left-0 w-full z-0">
        <Billboard/> 
      </div>
    </div>
  )
}

export default page