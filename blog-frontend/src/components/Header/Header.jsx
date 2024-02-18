import React from 'react'
import { images } from '../../constants'

function Header() {
 
  const navItemInfo = [
        { name : 'Home' }, 
        { name : 'Articles' }, 
        { name : 'Pages' }, 
        { name : 'pricing' }, 
        { name : 'Faq' }, 
  ];


  const NavItems = ({name}) =>(
    <li className='relative group'>
       <a href="/" className='px-4 py-2'>{name}</a>
       <span className='text-blue-500 absolute font-bold transition-all duration-500 top-0 right-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
    </li>

  );


  return (
    <section>
       <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
           
           <div className='w-14'>
              <img src={images.Logo} alt="logo" />
            </div>
           <div className='flex gap-x-9 items-center'>
               <ul className='flex gap-x-2 font-semibold'>
                    {
                      navItemInfo.map((item)=>(
                          <NavItems key={item.name} name ={item.name}/>
                      ))
                    }
               </ul>
               <button className='border-2 border-blue-500 px-6 py-2 text-blue-500 font-semibold hover:text-white hover:bg-blue-500 transition-all duration-300 rounded-full cursor-pointer'>Sing in</button>
           </div>


       </header>
    </section>
  )
}

export default Header