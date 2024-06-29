

import React from 'react'
import LogoutButton from '@/components/client-side/logoutButton'
import { NextPageContext } from 'next'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';



const page = async () => {

  const session = await auth()
  if (!session){
    redirect("/login")
  }


  
  
  return (
    <div className = "h-screen w-full bg-[url('/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div>
        <nav className = "text-white">
          <p> Welcome  </p>
          <div>
            <LogoutButton/>
          </div>
        </nav>
      </div>
      
    </div>
  )
}

export default page

