"use client"
import React,{useState} from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({username}) => {
    const [paymentform, setPaymentform] = useState({ name: '', message: ''})
    const handleChange = (e)=>{
        setPaymentform({...paymentform, [e.target.name]: e.target.value})
        console.log(paymentform.amount)
    }
    const pay =async (amount) => {
        let a =await initiate(amount, username, paymentform)
        let orderId = a.id
        const options= {
"key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Get Me a Galaxy", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, //This is a sample Order ID. Pass the id obtained in the response of Step 1
    "callback_url": `${process.env.URL}/api/razorpay`,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
    rzp1.open();
    }
  return (
    <>
    <button id="rzp-button1">Pay</button>
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
<div className="cover w-full relative">
      <img src="/images/bg.jpg" className='object-cover w-full h-[350px]' alt="" />
      <div>
        <img src="/images/dp.jfif" className='absolute left-[46%] bottom-[-50px] border-white border-2 rounded-full' alt="" />
      </div>
    </div>
    <div className='text-white flex flex-col justify-center items-center m-[10vh] gap-1 h-[100px]'>
      <div>
      <h3 className='text-white font-bold text-lg'>{username}</h3>
      </div>
      <div className='text-slate-400 pt-2'>
      <p>Web Developer</p>
      </div>
      <div className='text-slate-400'>
      <p>9,129 members . 32 posts . $9000/release</p>
      </div>
      </div>
      <div>
      <div className="payment flex justify-around gap-2 w-[98vw] h-[80vh]">
        <div className="supporter w-[45%] text-white bg-slate-800 h-[50vh] rounded-[15px] p-5">
          <h2 className='font-bold text-lg '>Supporter</h2>
          <ul>
            <li className='text-lg p-1 flex items-center gap-1'>
            <img width={35} className="invert mix-blend-screen" src="/images/profile.gif" alt="" />
              Arjun Donated $70 with a message
              </li>
            <li className='text-lg p-1 flex items-center gap-1'>
            <img width={35} className="invert mix-blend-screen" src="/images/profile.gif" alt="" />
              Arjun Donated $70 with a message
              </li>
            <li className='text-lg p-1 flex items-center gap-1'>
            <img width={35} className="invert mix-blend-screen" src="/images/profile.gif" alt="" />
              Arjun Donated $70 with a message
              </li>
            <li className='text-lg p-1 flex items-center gap-1'>
            <img width={35} className="invert mix-blend-screen" src="/images/profile.gif" alt="" />
              Arjun Donated $70 with a message
              </li>
          </ul>
        </div>
        <div className="makepayment w-[45%] text-white bg-slate-800 h-[50vh] rounded-[15px] p-5">
          <h2 className='font-bold text-lg'>Make a payment</h2>
          <div className='mt-3 flex flex-col gap-3'>
          <input onChange={handleChange} name="name" value={paymentform.name} type="text" className='bg-slate-900 rounded-md w-full mr-5 p-3 h-8' placeholder='Enter Name' />
          <input onChange={handleChange} name="message" value={paymentform.message} type="text" className='bg-slate-900 rounded-md w-full mr-5 p-3 h-8' placeholder='Enter Message' />
          <input onChange={handleChange} name="amount" value={paymentform.amount} type="number" className='bg-slate-900 rounded-md w-full mr-5 p-3 h-8' placeholder='Enter Amount' />
          {/* <button className='bg-slate-900 text-sm border-[1px] border-[#5f5f5f] rounded-md w-[60px] p-[6px]'>Pay</button> */}
          <button type="button" onClick={() => pay(paymentform.amount * 100)} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center flex justify-center items-center">Pay</button>
          </div>
          <div className='flex gap-2 my-3'>
            <button onClick={() => pay(1000)} className='bg-slate-900 text-sm text-[#c5c5c5] border-[1px] border-[#5f5f5f] rounded-md p-1'>Pay ₹10</button>
            <button onClick={() => pay(2000)} className='bg-slate-900 text-sm text-[#c5c5c5] border-[1px] border-[#5f5f5f] rounded-md p-1'>Pay ₹20</button>
            <button onClick={() => pay(3000)} className='bg-slate-900 text-sm text-[#c5c5c5] border-[1px] border-[#5f5f5f] rounded-md p-1'>Pay ₹30</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentPage
