import Card from '@/components/Card'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

import Featured from '@/components/Featured'
import Category from '@/components/Category'
import TopSelling from '@/components/TopSelling'
import Discount from '@/components/Discount'
const Home = () => {



  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <Category />
      <TopSelling />
      <Discount />
    </div>
  )
}

export default Home