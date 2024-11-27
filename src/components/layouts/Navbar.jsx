'use client'
// import Link from 'next/link'

// import SearchButton from '@/components/layouts/SearchButton'
// import UserAccountNav from '@/components/auth/UserAccountNav'
// import CartButton from '@/components/cart/CartButton'
import DesktopNav from '@/components/layouts/DesktopNav'
import MobileNav from '@/components/layouts/MobileNav'
import { useEffect } from 'react'
// import { buttonVariants } from '@/components/ui/button'



const Navbar = () => {

 

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background py-3'>
      <nav className='container px-2 sm:px-4 lg:px-6 flex items-center justify-between'>
        
        <MobileNav />

        
        <DesktopNav />
      </nav>
    </header>
  )
}

export default Navbar