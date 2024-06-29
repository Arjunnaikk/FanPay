"use client"
import React,{ useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)

  return (
    <>
    <nav className='bg-[#171625] text-white flex justify-between px-5 h-12 sticky top-0 z-50 items-center'>
        <Link href="/" ><div className="logo font-bold text-lg flex justify-center items-center">Galaxy <img width={45} className="invert mix-blend-screen" src="/images/nebula.gif" alt="" /></div></Link>
        {/* <ul className='flex gap-10'>
            <li>Home</li>
            <li>Project</li>
            <li>About</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul> */}
        <div className='relative'> {session && <>
<button onClick={() => {setShowdropdown(!showdropdown)}} onBlur={() => {setTimeout(() => {
  setShowdropdown(false)
}, 500);}} id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 appearance-none focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-purple-900 dark:hover:bg-purple-800 dark:focus:ring-blue-800" type="button"><img width={20} height={10} src="/images/menu.png" alt="" />
</button>
<div id="dropdownDivider" className={`z-10 ${showdropdown?"":"hidden"}  absolute top-[45px] right-[0px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
      <li>
        <Link href="/earning" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
      </li>
    </ul>
    <div className="py-2">
    <Link onClick={()=> signOut()} href={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-auto dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >Sign Out</Link> 
    </div>
</div>
{/* <Link href={"/"}><button onClick={()=> {signOut()}} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center flex justify-center items-center">Logout</button></Link> */}
</>
}
</div>
         {!session && <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center flex justify-center items-center">Login</button></Link>}
    </nav>
    </>
)
}

export default Navbar