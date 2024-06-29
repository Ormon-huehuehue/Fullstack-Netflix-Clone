

import Link from 'next/link';
import LogoutButton from '@/components/client-side/logoutButton'
import { User } from 'next-auth'
import React from 'react'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import { CiSearch } from "react-icons/ci";




const Navbar = async () => {
    const session = await auth();
    if (!session){
        redirect("/login")
    }

    const name = session?.user?.name as string;

  return (
    <nav className = "text-white py-4 px-5 flex justify-between font-montserrat">
        <img src = "/logo.png" alt="logo" className = ""/>
        <div id="links" className = "text-xl flex gap-20 items-center">
            <Link href = "/" className = "font-semibold text-white text-lg cursor-pointer hover:underline hover:text-slate-400"> Home </Link>
            <Link href = "/" className = "font-semibold text-white text-lg cursor-pointer hover:underline hover:text-slate-400" > Series </Link>
            <Link href = "/" className = "font-semibold text-white text-lg cursor-pointer hover:underline hover:text-slate-400"> Films </Link>
            <Link href = "/" className = "font-semibold text-white text-lg cursor-pointer hover:underline hover:text-slate-400"> New & popular </Link>
            <Link href = "/" className = "font-semibold text-white text-lg cursor-pointer hover:underline hover:text-slate-400"> My List </Link>
        </div>
        <div className ="flex items-center gap-10 font-montserrat ">
            <CiSearch className = "cursor-pointer"/>
            <p> Logged in as {name} </p>  
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <img className = "w-[40px] rounded-md" src="/profile.webp" alt="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem><LogoutButton/></DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav>
  )
}

export default Navbar