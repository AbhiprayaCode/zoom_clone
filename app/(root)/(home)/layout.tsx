
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: "TechMeet",
  description: "Video calling app by TechPioneers",
  icons: {
    icon: "/icons/logo.svg",
  }
} // eslint-disable-next-line @typescript-eslint/no-unused-vars

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar />

        <div className='flex'>
            <Sidebar />

            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>

                    {children}

                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout