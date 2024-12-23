"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ImageCard from "../cards/ImageCard";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between w-full lg:hidden">
      <Link href="/">
         <ImageCard src='/Images/SECURE365_new.png' width={240} height={80} alt="Secure Logo" />
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-transparent hover:bg-transparent hover:text-white font-Axiforma"
          >
            <Menu />
            <span className="sr-only ">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="px-2 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center font-Axiforma"
              onClick={() => setIsOpen(false)}
            ></Link>
            <div className="text-md mobile_link">
              <Link href="/">Home</Link>
              <Link href="/about-us">About-Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/service">Service</Link>
              <Link href="/why-choose-us">Why Choose Us</Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
