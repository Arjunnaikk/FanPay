"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Dashboard = () => {
    const { data: session } = useSession()
    if(!session) {
        const router = useRouter()
        router.push("/login")
      }
  return (
    <>
    <div className="container text-white w-[90vw] m-auto flex flex-col items-center gap-5">
      <div className='flex flex-col'>
        <label className='text-md'>Name</label>
        <input type="text" className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Email</label>
        <input type="text" className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Username</label>
        <input type="text" className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Profile Picture</label>
        <input type="text" className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Cover Picture</label>
        <input type="text" className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Razorpay Id</label>
        <input type="text" className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Razorpay Secret</label>
        <input type="text" className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-800 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center w-[60vw]">Save</button>

    </div>
    </>
  )
}

export default Dashboard