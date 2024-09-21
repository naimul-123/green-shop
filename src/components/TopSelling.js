'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import products from '@/assets/products.json'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { FaRegDotCircle } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';
const TopSelling = () => {
    const [isClient, setIsclient] = useState(false)
    const [currentSlice, setCurrentSlice] = useState(1)
    const [sliceNum, setSliceNum] = useState(1);

    const topselling = products.sort((a, b) => b.totalSales - a.totalSales).slice(0, 20);


    const getSliceNumber = () => {
        const width = window.innerWidth;
        if (width >= 1536) {
            return 5;
        }
        else if (width >= 1280) {
            return 4;
        }
        else if (width >= 1024) {
            return 3;
        }
        else if (width >= 768) {
            return 2;
        }
        else return 1;
    }

    useEffect(() => {
        setIsclient(true)
        if (typeof window !== undefined) {
            const handleResize = () => setSliceNum(getSliceNumber());
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize)


        }
    }, [])

    const totalSlice = Math.ceil(topselling.length / sliceNum)
    // console.log([...Array(totalSlice)]);

    const slideData = topselling.slice((currentSlice - 1) * sliceNum, (currentSlice * sliceNum));

    if (!isClient) {
        return null;
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24 ">
            <div className="flex justify-between items-center py-6">
                <h2 className="text-3xl font-semibold text-[#222222]">Top Selling Products</h2>
                <Link href="/" className="inline-flex flex-col font-semibold text-[#222222] group" ><span>See All Products</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
            </div>
            <div className="relative">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 ">
                    {slideData?.map((product, id) => <Card key={id} product={product} />
                    )}
                </div>

                <div className="my-3">
                    {[...Array(totalSlice)].map((_, id) => {

                        return (<button className="p-0 text-3xl inline-flex" key={id} onClick={() => setCurrentSlice(id + 1)}>{id + 1 === currentSlice ? <FaRegDotCircle className="inline" /> : <GoDotFill className="text-[#ddc2b9]" />}</button>)
                    }
                    )
                    }


                </div>
            </div>

        </div>
    )
}

export default TopSelling