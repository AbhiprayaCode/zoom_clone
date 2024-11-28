import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full ng-dark-1 px-6 py-4 lg:px-10'>
      <Link href={'/'} className='flex items-center gap-2'>
        <Image
          src='/icons/logo.svg'
          width={32}
          height={32}
          alt='logo'
          className='max-sm:size-10'
        />
        <p className='text-[24px] font-extrabold text-white max-sm:hidden'>TechMeet</p>
      </Link> 

      <div className='flex-between gap-5'>
        {/* Clerk - User Management */ }
        <SignedIn>
            <UserButton />
        </SignedIn>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut> */}
        

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar