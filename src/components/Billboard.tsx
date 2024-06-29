

import useBillboard from '@/hooks/useBillboard'
import React from 'react'

const Billboard =async () => {

    const url =await useBillboard();
    console.log(url)

  return (
   <div className = " flex justify-center w-screen ">
     <video className="fixed w-full h-full object-cover z-2" src={url} autoPlay loop muted/>
   </div>
  

  )
}

export default Billboard