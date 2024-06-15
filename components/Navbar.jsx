"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='bg-[#171625] text-white flex justify-between px-5 h-12 items-center'>
        <div className="logo font-bold text-lg flex justify-center items-center">Galaxy <img width={45} className="invert mix-blend-screen" src="/images/nebula.gif" alt="" /></div>
        {/* <ul className='flex gap-10'>
            <li>Home</li>
            <li>Project</li>
            <li>About</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul> */}
         <Link rel="stylesheet" href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center flex justify-center items-center">Login</button></Link>
    </nav>
    </>
)
}

export default Navbar