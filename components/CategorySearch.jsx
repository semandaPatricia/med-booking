import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

const CategorySearch = () => {
  return (
    <div className="mb-10 items-center flex flex-col ">
      <h2 className=' font-bold text-3xl tracking-wide'>
        Search <span className='text-green-600'>Doctor </span>
      </h2>
      <h2 className='text-gray-500'> search doctors Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sed alias illo consequuntur beatae voluptate? Quasi quas magnam necessitatibus! Impedit sapiente voluptates quasi tempora nam porro. Perspiciatis officia amet quos.</h2>
      <div className='flex w-full max-w-sm items-center mt-3 gap-2 '>
      <Input type="text" placeholder="search..." />
      <Button type="submit" >
      <Search className='h-4 w-4' />
      Search
      </Button>
      </div>
     
   
  </div>
  )
}

export default CategorySearch
