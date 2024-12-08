'use client'
import dynamic from 'next/dynamic'
// import Link from 'next/link'

// import SearchButton from '@/components/layouts/SearchButton'
// import UserAccountNav from '@/components/auth/UserAccountNav'
// import CartButton from '@/components/cart/CartButton'
const DesktopNav = dynamic(() => import('../layouts/DesktopNav'))
const MobileNav = dynamic(() => import('../layouts/MobileNav'))



const Navbar = () => {

  return (
    <header className='absolute top-0 z-50 w-full py-5'>
      <nav className='container px-2 sm:px-4 lg:px-6 flex items-center justify-between mx-auto'>
        <MobileNav />
        <DesktopNav />
      </nav>
    </header>
  )
}

export default Navbar