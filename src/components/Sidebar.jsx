import React from "react"
import {
    ArrowUpIcon,
    BellIcon,
    ChartBarIcon,
    CreditCardIcon,
    DocumentSearchIcon,
    ExternalLinkIcon,
    HomeIcon,
    MailIcon,
  } from "@heroicons/react/solid";
function Sidebar() {

  return (
    <>
      <div className=" bg-slate-800 flex-none w-14 sm:w-20 h-screen">
      <div className=" h-20 items-center flex">
         <HomeIcon width={40} className="text-gray-300 left-3 sm:left-6 fixed" />
      </div>
      <div className=" left-3 fixed sm:left-6 top-[100px]">
         <ChartBarIcon width={40} className=' bg-gray-700 p-2 mb-4 rounded-lg text-white'/>

         <DocumentSearchIcon width={40} className=' bg-gray-700 p-2 mb-4 rounded-lg text-white'/>
        
         <MailIcon width={40} className=' bg-gray-700 p-2 mb-4 rounded-lg text-white'/>
        
         <CreditCardIcon width={40} className=' bg-gray-700 p-2 mb-4 rounded-lg text-white'/>
        
         <BellIcon width={40} className=' bg-gray-700 p-2 mb-4 rounded-lg text-white'/>

      </div>
        <div className=" bottom-4 fixed left-3 sm:left-4">
          <a href="#top">
           <ArrowUpIcon width={40} className=' bg-gray-700 p-2 mb-4 rounded-lg text-white'/>
          </a>
          <ExternalLinkIcon width={40} className=' bg-gray-700 p-2 mb-4 rounded-lg text-white'/>

        </div>
      </div>
      
     
    </>
  )
}

export default Sidebar
