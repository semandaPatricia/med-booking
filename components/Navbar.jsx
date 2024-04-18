import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button"

const Navbar = () => {
    const Menu = [
        {
            id:1,
            name:"Home",
            path:"/"
        },
        {
            id:2,
            name:"Explore",
            path:"/explore"
        },
        {
            id:3,
            name:"Contact",
            path:"/contact"
        }

    ]
return (
    <div className='flex items-center justify-between p-4'>
        <div className=' flex items-center gap-10  '>
        <Image
              src="/logoipsum.svg"
              alt=" Logo"
              className="dark:invert"
              width={100}
              height={24}
           
            />
            <ul className='md:flex gap-8 hidden'>
               {Menu.map((item,index) => (
                <Link href={item.path}>
                 <li key={item.id}   className='hover:text-green-500 cursor-pointer transition-all ease-in-out'>
                {item.name}
              </li>
                </Link>
              
                ))}
            </ul>
    </div>
        <Button className="bg-green-700 text-white"     variant="outline">Button</Button>


    </div>
  )
}

export default Navbar
