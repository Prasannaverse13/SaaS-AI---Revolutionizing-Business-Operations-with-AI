import React from 'react'

import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
      <Button variant="ghost" size="icon" className='md:hidden'>
        <Menu/>
      </Button>
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default Navbar;