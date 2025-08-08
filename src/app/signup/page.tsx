import { ButtonIcon } from '@/components/arrowButton'
import Input from '@/components/input'
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { connectDb } from '@/lib/utils'
import { User } from '@/models/userModel'
import { hash } from 'bcryptjs'
import { redirect } from 'next/navigation'
import { signIn } from '@/auth'
import { Mail } from "lucide-react"
import Image from 'next/image'




const page = () => {

  const signUp = async (formData: FormData)=>{
    "use server"
    const name = formData.get("name") as string | undefined;
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;
    const confirmPassword = formData.get("confirmPassword") as string | undefined;

    console.log({name, email, password, confirmPassword})
    
    if(!email || !password || !confirmPassword || !name){
      throw new Error("All field are required");
    }
    if(password !== confirmPassword){
      throw new Error("Passwords do not match")
    }

    //connect with database
    await connectDb();

    const user = await User.findOne({email});
    console.log("User found :", user);
    if(user){
      throw new Error("User already exists, Please login using your credentials");
    }
    else{
      //hashing the password
      const hashedPassword =await  hash(password,10);
      
      const newUser = await User.create({name, email, password: hashedPassword});

      console.log("User created :", newUser);

      redirect("/login");


    }
  }
    


  return (
    <div className = "h-screen w-full bg-[url('/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className = "bg-black w-full h-full bg-opacity-30 flex flex-col items-center rounded-[60%]">
        <nav className = "px-12 py-5 w-screen">
          <Image src= "/logo.png" alt="logo"/>
        </nav>

        <main className  = "flex justify-center w-2/5 ">
          <div className = "bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
          <h2 className = "text-white text-4xl mb-8 font-semibold">Register</h2>
          <form action={signUp} className = "flex flex-col items-center gap-5">
            <Input type="text" name = "name" placeholder="Name"/>
            <Input type="email" name = "email" placeholder="Email"/>
            <Input type="password" name = "password" placeholder = "Password"/>
            <Input type= "password" name="confirmPassword" placeholder = "Confirm Password"/>
            <Button type="submit" variant="outline" className = "mb-2">Sign Up</Button>
          </form>


          <div className = "flex flex-col items-center gap-2" >
            <span className = "font-bold text-slate-400 text-lg">OR</span>
            <form
            action={async () => {
              "use server"
              await signIn("google")
              console.log("User signed in with google")
              redirect("/")
            }}>
              <Button className ='mb-3'>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
              </Button>
            </form>
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