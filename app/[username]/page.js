import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className="cover w-full relative">
      <img src="/images/bg.jpg" className='object-cover w-full h-[350px]' alt="" />
      <div>
        <img src="/images/dp.jfif" className='absolute left-[46%] bottom-[-50px] border-white border-2 rounded-full' alt="" />
      </div>
    </div>
    <div className='text-white flex flex-col justify-center items-center m-[10vh] gap-1 h-[100px]'>
      <div>
      <h3 className='text-white font-bold text-lg'>{params.username}</h3>
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
          <input type="text" className='bg-slate-900 rounded-md w-full mr-5 p-3 h-8' placeholder='Enter Name' />
          <input type="text" className='bg-slate-900 rounded-md w-full mr-5 p-3 h-8' placeholder='Enter Message' />
          <input type="text" className='bg-slate-900 rounded-md w-full mr-5 p-3 h-8' placeholder='Enter Amount' />
          {/* <button className='bg-slate-900 text-sm border-[1px] border-[#5f5f5f] rounded-md w-[60px] p-[6px]'>Pay</button> */}
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center flex justify-center items-center">Pay</button>
          </div>
          <div className='flex gap-2 my-3'>
            <button className='bg-slate-900 text-sm text-[#c5c5c5] border-[1px] border-[#5f5f5f] rounded-md p-1'>Pay $10</button>
            <button className='bg-slate-900 text-sm text-[#c5c5c5] border-[1px] border-[#5f5f5f] rounded-md p-1'>Pay $20</button>
            <button className='bg-slate-900 text-sm text-[#c5c5c5] border-[1px] border-[#5f5f5f] rounded-md p-1'>Pay $30</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Username