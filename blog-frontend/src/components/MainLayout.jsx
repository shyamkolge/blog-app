import React from 'react'
import {Header , Footer } from './index.js'

function MainLayout({childrens}) {
  return (
      <div>
        <Header/>
        {childrens}
        <Footer/>        
       </div>
  )
}

export default MainLayout