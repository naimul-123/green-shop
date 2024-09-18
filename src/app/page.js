import Card from '@/components/Card'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'
import products from '@/assets/products.json'
import Featured from '@/components/Featured'
const Home = () => {
  const featured = products.filter((item) => item.isFeatured)
  return (
    <div>
      <Header />
      <Hero />
      <Featured featured={featured} />
    </div>
  )
}

export default Home