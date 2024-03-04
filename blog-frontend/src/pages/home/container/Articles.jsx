import React from 'react'
import {ArticleCard} from '../../../components/index.js'
import { FaArrowRight } from "react-icons/fa6";


export const Articles = () => {
  return (
    <section className='flex flex-col container mx-auto px-5 py-10'>

      <div className=' flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
        <ArticleCard classNames='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>
        <ArticleCard classNames='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>
        <ArticleCard classNames='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>     
        <ArticleCard classNames='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>
        <ArticleCard classNames='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>
        <ArticleCard classNames='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'/>
      </div>

      <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg'>
          <span className=''>More Articles </span>
          <FaArrowRight className='h-3 w-3'/>
      </button>

      
    </section>
  )
}
