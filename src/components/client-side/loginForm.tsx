"use client"

import React from 'react'
import Link from 'next/link'
import { ButtonIcon } from '@/components/arrowButton'
import Input from '@/components/input'
import { useToast } from "@/components/ui/use-toast"
import { loginHandler } from "@/actions/login"



const LoginForm = () => {

const {toast} = useToast();

  return (
    <div className = "bg-black w-full h-full bg-opacity-30 flex flex-col items-center rounded-[60%]">
        <nav className = "px-12 py-5 w-screen">
          <img src= "/logo.png" alt="logo"/>
        </nav>

        <main className  = "flex justify-center w-2/5 ">
          <div className = "bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
          <h2 className = "text-white text-4xl mb-8 font-semibold">Sign in</h2>
          <form action={async (formData)=>{
            const email = formData.get("email") as string;
            const password =formData.get("password") as string;

            if(!email || !password){
                return toast({
                    title:"email or password missing",
                    description:"please fill all the fields"
                })
            }
            
            const error = await loginHandler(email,password);
            console.log("error:",error);
            
            if(!error){
                toast({
                    title:"Success",
                    description:"Logged in"
                })
    
            }
            else{
                return toast({
                    title:"error"
                })
            }
            }}
            className = "flex flex-col items-center gap-5">
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