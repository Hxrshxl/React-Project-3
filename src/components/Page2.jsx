import React from 'react'
import Client from '../assets/Client.svg'
import Page2Card from './Page2Card'

const Page2 = () => {
  return (
        <>
        <div className='h-screen mt-10 ' >
            <div>
                <h1 className='flex align-middle justify-center text-[#4D4D4D] font-bold text-3xl'>Our Clients</h1>
                <h3 className='flex align-middle justify-center text-[#4D4D4D] mt-6'>We have been working with some Fortune 500+ clients</h3>
            </div>


                <div className='flex justify-center align-middle mt-10'>
                    <img src={Client}  className="w-[600px] h-auto" alt="" />
                </div>


            <div className='mt-10'> 
                <h1 className='flex align-middle justify-center text-[#4D4D4D] font-bold text-3xl '>Manage your entire community in a single system</h1>
                <h3 className='flex align-middle justify-center text-[#4D4D4D]'>Who is Nextcent suitable for?</h3>
                
                
        <div className='flex justify-center align-middle gap-20 mt-10'>
      <Page2Card title="Membership Organisations" description="Our membership management software provides full automation of membership renewals and payments" iconClass="ri-group-3-fill" />
      
      <Page2Card title="National Associations" description="Our membership management software provides full automation of membership renewals and payments" iconClass="ri-building-line" />
      
      <Page2Card title="Clubs And Groups" description="Our membership management software provides full automation of membership renewals and payments" iconClass="ri-poker-clubs-line" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Page2