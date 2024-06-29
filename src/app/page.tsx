"use server"

import React from 'react'

import { auth } from '@/auth'
import { redirect } from 'next/navigation';

import Navbar from '@/components/Navbar';
import AccountMenu from '@/components/client-side/AccountMenu';
import Billboard from '@/components/Billboard';



const page =  () => {

  return (
    <div>
      <div>
        <Billboard/>
      </div>
      <div className="z-10">
      <Navbar/>
      </div>
      
    </div>
  )
}

export default page

