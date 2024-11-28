import StreamVideoProvider from '@/providers/StreamClientProvider'
import React from 'react'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: "TechMeet",
  description: "Video calling app by TechPioneers",
  icons: {
    icon: "/icons/logo.svg",
  }
} // eslint-disable-next-line @typescript-eslint/no-unused-vars

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