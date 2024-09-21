import React from 'react'
import Slider from './Slider'
import Services from './Services'
import sliderData from '@/assets/slider.json';
const Hero = () => {

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24 bg-[#f8f5ee]" >
            <Slider data={sliderData} />
            <Services />
        </div>
    )
}

export default Hero