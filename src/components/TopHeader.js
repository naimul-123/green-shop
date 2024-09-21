import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import logo from '../assets/image/logo.png'
import Image from 'next/image'
import UserActions from './UserActions'
const TopHeader = ({ isShow, handelMenu }) => {
    return (
        <div className="bg-[#064e38]   flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 text-white">
            <div className="flex gap-2 items-center">
                <div><Link href="/" className="h-[100px] w-[100px]" /><Image src={logo} width={100} height={100} alt="alt" /></div>
                <div className="hidden md:block"><SearchForm /></div>
            </div>
            <UserActions isShow={isShow} handelMenu={handelMenu} />
        </div>
    )
}

export default TopHeader