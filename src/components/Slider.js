'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaAngleLeft, FaAngleRight, FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
const Slider = ({ data }) => {
    const [slideNum, setSlideNum] = useState(0)
    const { title, image, href } = data[slideNum]

    const handleSlider = (n) => {
        const totalSlide = data.length;
        const counter = slideNum + n

        if (counter === totalSlide) {
            setSlideNum(0)
        }
        else if (counter < 0) {
            setSlideNum(totalSlide - 1)
        }
        else {
            setSlideNum(counter)
        }
    }
    console.log(slideNum);
    return (
        <div className="relative">
            <div className="flex justify-center gap-5 items-center min-h-[560px] max-h-[560px] bg-[#f3e8d6]">
                <div>
                    <p className="uppercase font-semibold text-[#86bc42]">--- Shop our freshest</p>
                    <h1 className="text-5xl font-bold text-[#064e38] leading-[60px]">{title} <br></br> <span className="text-[#86bc42]">Everyday</span></h1>
                    <Link href={href} className=" inline-flex flex-col uppercase font-semibold text-[#222222]"> <span>Discover More</span> <span className="bg-[#222222] h-0.5 w-24"> </span> </Link>
                </div>
                <div className="">
                    <Image alt="slider-1" width={560} height={560}
                        src={image} className="w-full" />
                </div>

            </div>

            <button className="btn btn-circle absolute top-[50%]  left-10" onClick={() => handleSlider(-1)}><FaAngleLeft /></button>
            <button className="btn btn-circle  absolute top-[50%]  right-10" onClick={() => handleSlider(1)}><FaAngleRight /></button>
            <div className="absolute bottom-4 left-10">
                {data.map((d, id) => <button className="p-0 text-3xl" onClick={() => setSlideNum(id)} key={id}>{id === slideNum ? <FaRegDotCircle className="" /> : <GoDotFill className="text-[#ddc2b9]" />}</button>)}
            </div>
        </div>

    )
}

export default Slider