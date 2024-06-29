"use client"

import {LoginForm} from '@/components/client-side/loginForm'
import React from 'react'




const page = () => {
  return (
    <div className = "h-screen w-full bg-[url('/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <LoginForm/>
    </div>
  )
}

export default page