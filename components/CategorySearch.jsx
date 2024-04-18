import React from 'react'




const CategorySearch = () => {
  return (
    <div className="mb-10 items-center flex flex-col ">
      <h2 className=' font-bold text-3xl tracking-wide'>
        Search <span className='text-green-600'>Doctor </span>
      </h2>
      <h2 className='text-gray-500'> search doctors Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sed alias illo consequuntur beatae voluptate? Quasi quas magnam necessitatibus! Impedit sapiente voluptates quasi tempora nam porro. Perspiciatis officia amet quos.</h2>
      <input type="search" placeholder="search doctor or department" />
      <button className='rounded-full outline p-2'>search</button>
   
  </div>
  )
}

export default CategorySearch
