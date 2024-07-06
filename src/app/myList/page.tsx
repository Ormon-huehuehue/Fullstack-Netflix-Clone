import Navbar from '@/components/Navbar'
import MyList from '@/components/client-side/MyList'
import React from 'react'

const page = () => {
  return (
      <div className = "h-screen w-screen bg-black font-palanquin pt-8">
        <Navbar/>
    
    
        <MyList Title = "MY LIST"/>
    </div>
    
  )
}

export default page