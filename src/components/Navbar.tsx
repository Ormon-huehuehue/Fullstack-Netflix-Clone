

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
  import { AiTwotoneBell } from "react-icons/ai";
  import useCurrentUser from '@/hooks/useCurrentUser';
  import useSWR from 'swr';

const Navbar = async () => {
    const session = await auth();
    const user = session?.user as User;
    

    
    if (!user){
        redirect("/login")
    }

    const name = user?.name as string;

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
            <div className = "cursor-pointer w-6 h-6 flex justify-center items-center">
            <CiSearch />
            </div>
            <div className ="cursor-pointer w-6 h-6 flex justify-center items-center">
            <AiTwotoneBell />
            </div>
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