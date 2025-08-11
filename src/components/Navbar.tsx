"use client"

import Link from 'next/link';
import LogoutButton from '@/components/client-side/logoutButton'
import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import getCurrentUser from '@/actions/getCurrentUser';
  import Image from 'next/image';
  import { CiSearch } from "react-icons/ci";
  import { AiTwotoneBell } from "react-icons/ai";
  import { motion } from 'framer-motion';
  import { MdAccountCircle } from "react-icons/md";

import { useQuery} from '@tanstack/react-query';

const Navbar =  () => {
    const {data : currUser , error} = useQuery({
        queryKey:['currUser'],
        queryFn: getCurrentUser
    })

    // const profilePic = currUser?.image? currUser.image : "./profile.webp"
    
    const name = currUser?.name as string;


  return (
    <nav className = "text-white py-4 px-5 flex justify-between font-montserrat">
        <div id="links" className = "text-xl flex gap-10 items-center">
            <Link href = "/" ><Image src = "/logo.png" alt="logo" width={100} height={50}/></Link>
            <Link href = "/" className = "text-white text-base cursor-pointer hover:text-slate-400 transition-all transition-300"> Home </Link>
            <Link href = "/" className = " text-white text-base cursor-pointer hover:text-slate-400 transition-all transition-300" > Series </Link>
            <Link href = "/" className = " text-white text-base cursor-pointer hover:text-slate-400 transition-all transition-300"> Films </Link>
            <Link href = "/" className = " text-white text-base cursor-pointer hover:text-slate-400 transition-all transition-300"> New & popular </Link>
            <Link href = "/myList" className = " text-white text-base cursor-pointer hover:text-slate-400 transition-all transition-300"> My List </Link>
        </div>
        <div className ="flex items-center gap-6 font-montserrat ">
            <div className = "cursor-pointer w-6 h-6 flex justify-center items-center">
            <CiSearch />
            </div>
            <div className ="cursor-pointer w-6 h-6 flex justify-center items-center">
            <AiTwotoneBell />
            </div>
            <p className='text-white text-base font-montserrat'> Logged in as {name} </p>  
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <motion.div 
                    whileHover={{scale:1.1}}
                    whileTap = {{scale:0.9}}
                    className = "w-10 h-10 rounded-full  flex items-center justify-center cursor-pointer"
                    >
                        <MdAccountCircle className="text-white text-xl" size={30} />
                    </motion.div>
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