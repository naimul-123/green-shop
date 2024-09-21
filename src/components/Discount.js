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
const Discount = () => {
    const [currentSlice, setCurrentSlice] = useState(1)
    const [sliceNum, setSliceNum] = useState(1);
    const [isClient, setIsclient] = useState(false)
    const discounted = products.filter((item) => item.price >= 3).sort((a, b) => b.price - a.price);


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
        else return 2;
    }

    useEffect(() => {
        setIsclient(true)
        if (typeof window !== undefined) {
            const handleResize = () => setSliceNum(getSliceNumber());
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize)


        }
    }, [sliceNum])

    const totalSlice = Math.ceil(discounted.length / sliceNum)
    // console.log([...Array(totalSlice)]);

    const slideData = discounted.slice((currentSlice - 1) * sliceNum, (currentSlice * sliceNum) - 1);
    // const slideData = topselling.slice((currentSlice - 1) * sliceNum, (currentSlice * sliceNum));

    if (!isClient) {
        return null
    }

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24 ">
            <div className="flex justify-between items-center py-6">
                <h2 className="text-3xl font-semibold text-[#222222]">Discount</h2>
            </div>
            <div className="relative">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 ">

                    <div className=" min-h-[400px] relative   flex flex-col items-center justify-center text-center text-white">
                        <div>
                            <Image src="https://i.ibb.co.com/TYFz3VX/arbutus.jpg" alt="alt" fill className="w-full rounded-2xl" />
                        </div>
                        <div className="z-10 bg-[#4eb219] w-full h-full flex items-center flex-col justify-center bg-opacity-80 rounded-2xl">
                            <h2 className="text-3xl font-extrabold">$20</h2>
                            <h3 className="text-2xl font-bold">Under Products</h3>
                            <p className="text-lg font-semibold">Limited Time Only</p>
                        </div>
                    </div>

                    {slideData?.map((product, id) => <Card key={id} product={product} />
                    )}
                </div>
                <button className="btn btn-circle absolute top-[600px] sm:top-[50%]  z-10 left-0 sm:left-[240px]" onClick={() => setCurrentSlice(prev => prev > 0 ? prev - 1 : totalSlice)}><FaAngleLeft /></button>
                <button className="btn btn-circle absolute top-[600px] sm:top-[50%] z-10   right-0" onClick={() => setCurrentSlice(prev => prev >= totalSlice ? 1 : prev + 1)}><FaAngleRight /></button>
            </div>

        </div>
    )
}

export default Discount