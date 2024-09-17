import React from 'react'
import Slider from './Slider'
import slide1 from '@/assets/image/carousel-1.png'
import slide2 from '@/assets/image/carousel-2.png'
import slide3 from '@/assets/image/carousel-3.png'
import slide4 from '@/assets/image/carousel-4.png'
import slide5 from '@/assets/image/carousel-5.png'
const Hero = () => {
    const data = [
        { title: "Fresh Hand-Picked Vegetables", image: slide1, href: "/" },
        { title: "Fresh Hand-Picked Frouts", image: slide2, href: "/" },
        { title: "Fresh Hand-Picked Bekery", image: slide3, href: "/" },
        { title: "Fresh Hand-Picked Fish", image: slide4, href: "/" },
        { title: "Fresh Hand-Picked Milk", image: slide5, href: "/" },
    ]
    return (
        <div>
            <Slider data={data} />
        </div>
    )
}

export default Hero