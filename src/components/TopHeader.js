import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import logo from '../assets/image/logo.png'
import Image from 'next/image'
import UserActions from './UserActions'
const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="flex gap-2 items-center">
                <div><Link href="/" className="" /><Image src={logo} width={100} height={100} alt="alt" /></div>
                <div><SearchForm /></div>
            </div>
            <UserActions />
        </div>
    )
}

export default TopHeader