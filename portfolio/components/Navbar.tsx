"use client"


import Link from "next/link"
import {  NavigationMenuList ,NavigationMenu, NavigationMenuItem, navigationMenuTriggerStyle, NavigationMenuLink} from "./ui/navigation-menu"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import Mobilemenu from "./Mobilemenu"


export const navigationItems =[
  {
    name:"Home",
    href:"/"
  },
 
  {
    name:"GuestBook",
    href:"/guestBook"
  },
  {
    name:"Projects",
    href:"/projects"
  },
]


function Navbar() {
  const pathname = usePathname()
  return (
    <div className="max-w-7xl
    mx-auto
    px-4 py-5
    md:px-8
    grid grid-cols-12
    ">
<div className="col-span-6 flex md:col-span-3">
    <Link href="/">
        <h1 className="text-3xl font-semibold ">Jan <span className="text-blue-600">Marshal</span></h1>
    </Link>
</div>

<div className="hidden sm:flex justify-center items-center col-span-6">
 <NavigationMenu>
  <NavigationMenuList>
   {navigationItems.map((item,index)=>(
    <NavigationMenuItem key={index}>
      <Link href={item.href} legacyBehavior passHref>
       <NavigationMenuLink active={pathname===item.href}
        className={navigationMenuTriggerStyle()}>
        {item.name}
       </NavigationMenuLink>
        </Link>
    </NavigationMenuItem>
   ))}
  </NavigationMenuList>
 </NavigationMenu>
</div>

<div className="flex items-center justify-end md:col-span-3 col-span-6 ">
<Button className="hidden sm:block">Contact Me</Button>
<div className="sm:hidden">
  <Mobilemenu />
</div>

</div>


    </div>
  )
}

export default Navbar