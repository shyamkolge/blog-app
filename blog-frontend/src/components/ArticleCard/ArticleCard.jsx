import React from 'react'
import { images } from '../../constants'
import {BsCheckLg} from 'react-icons/bs'

export const ArticleCard = ({classNames}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${classNames}`}>
      
         <img 
            src={images.Post1Image} 
            alt="title" 
            className='w-full h-auto object-cover object-center md:h-52 lg:h-48 xl:h-60'/>
         
          <div className='p-5'>
              <h2 className='font-roboto font-bold text-dark-soft text-xl md:text-2xl lg:text-[28px]'>Future of Work</h2>
              <p className='mt-3 font-opensans text-sm text-dark-light md:text-lg'>Majority of peole will work in jobs that don’t exist today.</p>

              
            <div className='flex items-center flex-nowrap justify-between mt-6'>
              <div className='flex items-center gap-x-2 md:gap-x-2.5'>
                  <img src={images.Logo} className='w-9 h-9 md:w-10 md:h-10' alt="post profile" />

                  <div className='flex flex-col'>
                    <h4 className='text-sm text-dark-soft font-bold italic md:text-base'>
                        Shyam kolge
                    </h4>
                    <div className='flex items-center gap-x-1'>
                       <span className='bg-[#36B37E] w-fit bg-opacity-20 rounded-full p-1.5'>
                          <BsCheckLg className='w-1.5 h-1.5 text-[#36B37E]'/>
                        </span>
                       <span className='font-opensans italic text-dark-light text-xs md:text-sm'>
                          Verified user 
                      </span>
                    </div>
                  </div>
              </div>
              <span className='font-bold italic text-dark-light font-opensans text-sm md:text-base'>
                02 May
              </span>
            </div>
 
          </div>
    </div>
  )
}
