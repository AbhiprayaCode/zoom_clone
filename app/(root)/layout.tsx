import StreamVideoProvider from '@/providers/StreamClientProvider'
import React from 'react'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: "TechMeet",
  description: "Video calling app by TechPioneers",
  icons: {
    icon: "/icons/logo.svg",
  }
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider> 
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout