import React from 'react'
import Slider from './Slider'
import Services from './Services'
import sliderData from '@/assets/slider.json';
const Hero = () => {

    return (
        <div>
            <Slider data={sliderData} />
            <Services />
        </div>
    )
}

export default Hero