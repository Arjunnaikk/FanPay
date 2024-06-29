"use client"

export default function Home() {
  return (
    <>
    <div className="flex justify-center m-2 flex-col items-center h-[50vh] text-white">
    <div className="font-bold text-3xl flex gap-5 m-2 mx-auto items-center">Buy me a Galaxy! <img width={55} className="invert mix-blend-screen		" src="/images/nebula.gif" alt="" /></div>
    <p className="p-2 mx-auto">A crowdfunding platform for creators. Get funded by your fans and followers. Start now.</p>
  <div className="m-8">
  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
  </div>
  </div>
  <div className="bg-white opacity-10 h-1">
  </div>
  <div className="flex justify-center m-auto text-center p-5 mb-5"><p className="container text-white text-2xl font-bold">Your fans can buy you a Galaxy</p>
    </div>
  <div className="flex justify-around m-1 p-2 flex-col md:flex-row gap-10">
    <div className="flex flex-col justify-center items-center">
  <img width={60} className="mix-blend-screen bg-slate-400 rounded-full mb-5" src="/images/presentation.gif" alt="" />
  <p className="text-white font-bold">Fund Yourself</p>
  <p className="text-white p-2 m-auto">Your fans are available to help you</p>
  </div>
  <div className="flex flex-col justify-center items-center">
  <img width={60} className="mix-blend-screen bg-slate-400 rounded-full mb-5" src="/images/dollar.gif" alt="" />
  <p className="text-white font-bold">Fund Yourself</p>
  <p className="text-white p-2 m-auto">Your fans are available to help you</p>
  </div>
  <div className="flex flex-col justify-center items-center">
  <img width={60} className="mix-blend-screen bg-slate-400 rounded-full mb-5" src="/images/three-friends.gif" alt="" />
  <p className="text-white font-bold">Fund Yourself</p>
  <p className="text-white p-2 m-auto">Your fans are available to help you</p>
  </div>
    </div>
    </>
  );
}




