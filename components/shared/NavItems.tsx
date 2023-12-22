import { DoorOpen, Home, Landmark, Plus } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'


const routes = [
  {
    icon: Home,
    name: "Home",
    route: "/",
  },
  {
    icon: Landmark,
    name: "Pricing",
    route: "/pricing",
  },
  {
    icon: Plus,
    name: "Create",
    route: "/create",
  },
  
];
const NavItems = () => {
  return (
    <ul className="flex gap-4 flex-col md:flex-row ">
      {routes.map((route) => {
        return (
          <li key={route.route}>
            <Link href={route.route}>
              <span className="flex gap-x-3 border p-2 rounded-md hover:bg-secondary ">
                <route.icon /> {route.name}{" "}
              </span>
            </Link>
          </li>
        );
      })}
     
    </ul>
  );
}

export default NavItems