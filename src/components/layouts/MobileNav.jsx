'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from "next/image";
import { Icons } from '@/components/Icons'
import Secure from "../../../public/svg/secure.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-between w-full lg:hidden'>
   <Link href="/">
        <Image src={Secure} width={150} height={30} alt="Secure Logo" />
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon' className="text-white bg-transparent hover:bg-transparent hover:text-white">
            <Menu />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <div className='px-2 flex flex-col gap-4'>
            <Link
              href='/'
              className='flex items-center'
              onClick={() => setIsOpen(false)}
            >
              {/* <Icons.logo className='mr-2 h-4 w-4' aria-hidden='true' /> */}
              {/* <span className='font-bold'></span>
              <span className='sr-only'>Home</span> */}
            </Link>
            <div className='text-sm'>
              <Accordion
                type='multiple'
                defaultValue={['item-1', 'item-2', 'item-3']}
                className='w-full'
              >
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Home</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/about'
                      >
                       About Us
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/delivery'
                      >
                       Delivery
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Lobby</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link onClick={() => setIsOpen(false)} href='/development'>
                      Development
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/ebooks'
                      >
                        Ebooks
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/office'
                      >
                        Office
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/playlist'
                      >
                        Playlist
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/privacy'
                      >
                        Privacy
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/spay'
                      >
                        Spay
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href='/support'
                      >
                        Support
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav