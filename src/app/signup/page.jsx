import { ButtonIcon } from '@/components/arrowButton'
import Input from '@/components/input'
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"




const page = () => {
  return (
    <div className = "h-screen w-full bg-[url('/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className = "bg-black w-full h-full bg-opacity-30 flex flex-col items-center rounded-[60%]">
        <nav className = "px-12 py-5 w-screen">
          <img src= "/logo.png" alt="logo"/>
        </nav>

        <main className  = "flex justify-center w-2/5 ">
          <div className = "bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
          <h2 className = "text-white text-4xl mb-8 font-semibold">Register</h2>
          <div className = "flex flex-col items-center gap-5">
            <Input placeholder="Email"/>
            <Input placeholder = "Password"/>
            <Input placeholder = "Confirm Password"/>
            <Button type="submit" variant="outline">Sign Up</Button>

            <span className = "font-bold text-slate-400 text-lg">OR</span>
            <Link className = "font-semibold text-white text-lg cursor-pointer hover:underline hover:text-slate-400" href = "/resetPassword">Forgot Password</Link>

            <span className = "self-start font-bold text-slate-400 text-lg">Already have an account?
              <Link href = "/login" className = "text-white hover:underline">Sign in</Link>
            </span>

    
          </div>
          </div>
        </main>
      

      </div>
    </div>
  )
}

export default page