import React from 'react'
import Link from 'next/link'
import { ButtonIcon } from '@/components/arrowButton'
import Input from '@/components/input'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"


const LoginForm = () => {



  return (
    <div className = "bg-black w-full h-full bg-opacity-30 flex flex-col items-center rounded-[60%]">
        <nav className = "px-12 py-5 w-screen">
          <img src= "/logo.png" alt="logo"/>
        </nav>

        <main className  = "flex justify-center w-2/5 ">
          <div className = "bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
          <h2 className = "text-white text-4xl mb-8 font-semibold">Sign in</h2>
          <form action={(formdata : FormData)=>{
            const email = formdata.get("email") as string;
            const password =formdata.get("password") as string;

            if(!email || !password){
              return <Toaster title = "Error" description = "Please fill in all fields" />
            }

          }} className = "flex flex-col items-center gap-5">
            <Input type="email" placeholder="Email" name="email"/>
            <Input type="password" placeholder = "Password" name="password"/>
            <button type="submit"><ButtonIcon/></button>
            <span className = "font-bold text-slate-400 text-lg">OR</span>
            <Link className = "font-semibold text-white text-lg cursor-pointer hover:underline hover:text-slate-400" href = "/resetPassword">Forgot Password</Link>

            <span className = "self-start font-bold text-slate-400 text-lg">New to Catflix?
              <Link href = "/signup" className = "text-white hover:underline">Sign up now</Link>
            </span>
          </form>
          </div>
        </main>
      </div>
  )
}

export {LoginForm}