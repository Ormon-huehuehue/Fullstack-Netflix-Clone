

import React from 'react'
import LogoutButton from '@/components/client-side/logoutButton'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import { User } from '@/models/userModel';



const page = async (currUser: string) => {

  const session = await auth()
  if (!session){
    redirect("/login")
  }
  currUser = session?.user?.name as string;

  return (
    <div className = "h-screen w-full bg-[url('/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div>
        <nav className = "text-white">
          <p> Logged in as {currUser} </p>
          <div>
            <LogoutButton/>
          </div>
        </nav>
      </div>
      
    </div>
  )
}

export default page

