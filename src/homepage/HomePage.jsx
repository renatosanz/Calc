import React from 'react'
import './HomePage.css'
import CalcBox from '../CalcBox/CalcBox'
import Footer from '../CalcBox/Footer'

export default function HomePage() {
  return (
    <div id='PageContent'>
      <CalcBox/>
      <Footer/>
    </div>
  )
}
