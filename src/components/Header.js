"use client"
import React, { useState, useEffect } from 'react'
import TopHeader from './TopHeader'
import HeaderNav from './HeaderNav'


const Header = () => {
    const [isShow, setIsShow] = useState(false)
    // console.log(isShow);
    const handelMenu = (bull) => {
        setIsShow(bull)
    }

    useEffect(() => {
        const handleScroll = () => {
            handelMenu(false)
        }
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [isShow])

    return (
        <div className="sticky w-full top-0 md:-top-[88px] z-20">
            <TopHeader isShow={isShow} handelMenu={handelMenu} />
            <HeaderNav isShow={isShow} />
        </div>
    )
}

export default Header