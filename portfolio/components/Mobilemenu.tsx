import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { navigationItems } from './Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

function Mobilemenu() {
    const location =usePathname()
  return (
  <Sheet>
    <SheetTrigger asChild>
<Button variant="outline" size='icon'>
    <Menu className='w-4 h-4' />
</Button>
    </SheetTrigger>
    <SheetContent>
        <div className='mt-5 flex space-y-1 flex-col'>
            {navigationItems.map((item,index)=>(
                <Link key={index} href={item.href} className={cn(
                    location===item.href?
                    "bg-muted":"hover:bg-muted hover:bg-opacity-75",
                    "group flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md transition-colors duration-200 ease-in-out"
                )}>
                    {item.name}
                </Link>
            ))}

        </div>

<SheetFooter className='mt-5 '>
    <SheetClose asChild>
<Button type='submit'>Close</Button>
    </SheetClose>
</SheetFooter>

    </SheetContent>


  </Sheet>
  )
}

export default Mobilemenu