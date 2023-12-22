import React from 'react'
import { Button } from '../ui/button'
import { ToggleMode } from './ToggleMode'
import NavItems from './NavItems'
import { MenuIcon } from 'lucide-react'
import MobileNav from './MobileNav'
import Link from 'next/link'
import {  SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className="bg-transparent border-b ">
      <div className="wrapper flex items-center justify-between">
        <h1 className="font-bold text-3xl "> ZoomShare </h1>

        <div className="md:flex items-center gap-5 hidden">
          <NavItems />
          <SignedIn>
            {" "}
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <Button>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>

          <ToggleMode />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

export default Header