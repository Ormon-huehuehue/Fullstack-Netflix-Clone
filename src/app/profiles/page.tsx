"use client"

import ProfileCard from '@/components/profileCard'
import React, { useState } from 'react'

const page = () => {

    const [profiles, setProfiles] = useState([]);

    const addProfile = (name:string, image:string) => {
        setProfiles([...profiles, {name, image}])
    }


  return (
    <div className = "bg-zinc-900 h-screen font-montserrat">
        <div className = "flex justify-center items-center h-full">
            <div className = "text-white ">
            <h1 className = "text-4xl font-bold">Who is watching?</h1>
            <ProfileCard name ="Armaan" image ="/profile.webp"/>
            </div>
        </div>


    </div>
  )
}

export default page