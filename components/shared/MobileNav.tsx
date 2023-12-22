import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DoorOpen, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";


import React from 'react'
import NavItems from "./NavItems";
import { ToggleMode } from "./ToggleMode";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden block">
        {" "}
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {" "}
            <div className="flex  justify-between items-center my-7">
              <h2 className="font-bold text-xl"> ZoomShare </h2>
              <ToggleMode />
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-y-5">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <hr/> 
              </SignedIn>
              <NavItems />

              <SignedOut>
                <hr />
                <Button>
                  <Link href={"/sign-in"}>
                    <span className="flex items-center gap-x-2">
                      <DoorOpen /> Login
                    </span>
                  </Link>
                </Button>
              </SignedOut>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav