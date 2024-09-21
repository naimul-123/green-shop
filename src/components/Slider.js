'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        const intervalId = setInterval(() => handleSlider(1), 3000);
        return () => clearInterval(intervalId)
    }, [slideNum])
    // setTimeout(handleSlider(1), 2000)
    return (
        <div className="relative">
            <div className="flex  flex-col md:flex-row justify-center gap-5 items-center h-full  ">
                <div className="bg-white bg-opacity-20 space-y-2 text-center md:text-left w-full">
                    <p className="uppercase font-semibold text-[#86bc42]">--- Shop our freshest</p>
                    <h1 className="text-2xl md:ext-3xl lg:text-5xl font-bold text-[#064e38]">{title} <br></br> <span className="text-[#86bc42]">Everyday</span></h1>
                    <Link href={href} className=" inline-flex flex-col uppercase font-semibold text-[#222222]"> <span>Discover More</span> <span className="bg-[#222222] h-0.5 w-24"> </span> </Link>
                </div>
                <div className="shrink-0 w-full overflow-hidden  md:w-1/2">
                    <Image alt={title} width="500" height="500" className="w-full"
                        src={image} />
                </div>

            </div>

            <button className="btn bg-transparent btn-circle absolute top-[50%] right-0" onClick={() => handleSlider(1)}><FaAngleRight /></button>
            <button className="btn bg-transparent btn-circle absolute top-[50%] left-0" onClick={() => handleSlider(-1)}><FaAngleLeft /></button>
            <div className="absolute bottom-4 left-10">
                {data.map((d, id) => <button className="p-0 text-3xl" onClick={() => setSlideNum(id)} key={id}>{id === slideNum ? <FaRegDotCircle className="" /> : <GoDotFill className="text-[#ddc2b9]" />}</button>)}
            </div>
        </div>

    )
}

export default Slider