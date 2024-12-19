'use client'
import dynamic from 'next/dynamic'

const DesktopNav = dynamic(() => import('../layouts/DesktopNav'))
const MobileNav = dynamic(() => import('../layouts/MobileNav'))



const Navbar = () => {

  return (
    <header className='absolute top-0 z-50 w-full pt-10 pb-5'>
      <nav className='container   flex items-center justify-between mx-auto'>
        <MobileNav />
        <DesktopNav />
      </nav>
    </header>
  )
}

export default Navbar