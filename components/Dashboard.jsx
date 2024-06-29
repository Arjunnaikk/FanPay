"use client"
import React, {useState, useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setForm] = useState({})

    useEffect(() => {
      if(!session) {
        router.push("/login")
      }else{
        getData()
      }
    }, [router, session])
    

      const handleChange = (e)=>{
        setForm({...form, [e.target.name]: [e.target.value]})
      }
      const getData =async ()=>{
        let u = await fetchuser(session.user.name)
        setForm(u)
      }
      const handleSubmit = (e)=>{
        update()
        let a = updateProfile(e, session.user.name)
        toast.success('Donated a Galaxy!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <form className="container text-white w-[90vw] m-auto flex flex-col items-center gap-5" action={handleSubmit}>
      <div className='flex flex-col'>
        <label className='text-md'>Name</label>
        <input type="text" name="name" id="name" value={form.name?form.name:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Email</label>
        <input type="text" name="email" id="email" value={form.email?form.email:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Username</label>
        <input type="text" name="username" id="username" value={form.username?form.username:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Bio</label>
        <input type="text" name="bio" id="bio" value={form.bio?form.bio:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Profile Picture</label>
        <input type="text" name="profilepic" id="profilepic" value={form.profilepic?form.profilepic:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Cover Picture</label>
        <input type="text" name="coverpic" id="coverpic" value={form.coverpic?form.coverpic:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Razorpay Id</label>
        <input type="text" name="razorpayId" id="razorpayId" value={form.razorpayId?form.razorpayId:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <div className='flex flex-col'>
        <label className='text-md'>Razorpay Secret</label>
        <input type="text" name="razorpaySecret" id="razorpaySecret" value={form.razorpaySecret?form.razorpaySecret:""} onChange={handleChange} className='bg-slate-800 rounded-md w-[60vw] p-3 h-[28px]' />
      </div>
      <button type="submit" className="text-white bg-gradient-to-br from-purple-800 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center w-[60vw]">Save</button>

    </form>
    </>
  )
}

export default Dashboard

