'use client'
import React, { useState, useEffect } from 'react'
import Card from './Card'
import Link from 'next/link'
import products from '@/assets/products.json'


const Featured = () => {
    const [shortBy, setShortBy] = useState('rating')

    const featured = products.sort((a, b) => b[shortBy] - a[shortBy]).slice(0, 10);

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24">
            <div className="flex justify-between items-center py-6">
                <h2 className="text-3xl font-semibold text-[#222222]">Featured Products</h2>
                <nav className="flex gap-3">
                    <button className="inline-flex flex-col font-semibold text-[#222222] group" onClick={() => setShortBy('totalSales')}><span>Best Sellers</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] ${shortBy === "totalSales" ? '' : 'opacity-0'}`}></span></button>
                    <button className="inline-flex flex-col font-semibold text-[#222222] group" onClick={() => setShortBy('totalRatingPersons')}><span>Most Popular</span> <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] ${shortBy === "totalRatingPersons" ? '' : 'opacity-0'}`}></span></button>
                    <button className="inline-flex flex-col font-semibold text-[#222222] group" onClick={() => setShortBy('price')}><span>Top 10</span> <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] ${shortBy === "price" ? '' : 'opacity-0'}`}></span></button>
                    <button className="inline-flex flex-col font-semibold text-[#222222] group" onClick={() => setShortBy('rating')}><span>Best Rated</span> <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] ${shortBy === "rating" ? '' : 'opacity-0'}`} ></span></button>
                </nav>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 ">
                {featured?.map((product, id) => <Card key={id} product={product} />)}
            </div>
        </div>

    )
}

export default Featured