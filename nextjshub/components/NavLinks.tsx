"use client"

import { url } from 'inspector'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react'
import { GoHome } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";

function NavLinks() {
  
  const pathname = usePathname()
  const links = [
    {
      id:1,
      img:<GoHome size={30} color='white'/>,
      url:"/",
    },
    {
      id:2,
      img:<GoPerson size={30} color='white'/>,
      url:"/about",
    },
    {
      id:3,
      img:<GoProjectSymlink size={30} color='white'/>,
      url:"/contact",
    },
    {
      id:4,
      img:<IoMenuOutline size={30} color='white' />,
      url:"/menu",
    }
  ];

 
  return (
    <div className='Navcontainer flex  justify-center '>
    <div className='Navlinks border-2 bg-black py-1 px-2 border-white rounded-xl flex gap-4 items-center relative'>
      {links.map((link)=>(
        <Link href={link.url} key={link.id} className={`flex items-center
         ${pathname === link.url ? 'bg-white/20 p-2 rounded-xl' : 'bg-black p-2'}`}>
           
          {link.img}
          
        </Link>
      ))}
    </div>
    </div>
  )
}

export default NavLinks