"use client"
import React, {useState, useEffect} from 'react'
import { fetchpayments2} from '@/actions/useractions'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Earning = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [payments, setPayments] = useState([])
  const getData = async (params) => {
    let dbPayments = await fetchpayments2(session.user.name)
    setPayments(dbPayments)
    console.log(dbPayments)
  }
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(new Date(date))
  }
  useEffect(() => {
    if(!session) {
      router.push("/login")
    }else{
      getData()
      console.log(session)
      // console.log("hello",to_user)
    }
  }, [router, session])
  return (
    <>
    <div className="container m-auto my-5 rounded-lg w-[80vw] bg-slate-700 h-[90vh]">
      <div>
        <h1 className='font-bold text-3xl text-white text-center p-2'>Galaxy Donated</h1>
      </div>
      <div>
      <div className='h-[90%] overflow-y-auto overflow-x-hidden'>
              <ul>
                {payments.length == 0 && <li>No Payment Yet</li>}
                <div className='bg-slate-600 w-[100%] h-1'></div>
                {payments.map((paym, i) => {
                  return <><li key={i} className='box text-lg p-1 flex items-center h-20 gap-1'>
                    <img width={35} className="invert mix-blend-screen" src="/images/profile.gif" alt="" />
                    <div className='container flex justify-between'><div>{paym.name} Donated ₹{paym.amount} with a message "{paym.message}" at</div><div><p className='font-sans text-white text-xs px-3'>{formatDate(paym.createdAt)}</p></div></div>
                    
                  </li><div className='bg-slate-600 w-[100%] h-1'></div></>
                })}
              </ul>
            </div>
      </div>
    </div>
    </>
  )
}

export default Earning