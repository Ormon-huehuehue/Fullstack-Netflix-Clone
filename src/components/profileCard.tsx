"use client"

import React from 'react'

interface ProfileCardProps{
    name : string,
    image: string
}


const ProfileCard:React.FC<ProfileCardProps> = ({name, image}:ProfileCardProps) => {
  return (
    <div className = "flex flex-col items-center justify-center gap-2 py-7">
        <img src={image} alt="profileImg"
        className="w-44 h-44 rounded-md  border-2 border-transparent hover:cursor-pointer hover:border-white overflow-hidden" />
        <h1 className = "text-2xl font-semibold font-palanquin">{name}</h1>
        
    </div>
  )
}

export default ProfileCard