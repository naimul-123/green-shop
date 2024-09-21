import Link from 'next/link'
import React from 'react'
import { FaRegHeart, FaUser } from 'react-icons/fa'
import { FaBagShopping } from "react-icons/fa6";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
const UserActions = ({ isShow, handelMenu }) => {
    return (
        <div className="inline-flex gap-4">
            <Link href="/"><FaUser className="w-8 h-8" /></Link>
            <Link href="/"><FaRegHeart className="w-8 h-8" /></Link>
            <Link href="/" className="indicator">
                <span className="indicator-item badge indicator-bottom rounded-badge border-none text-white bg-[#85bd42] w-5 h-5">1</span>
                <FaBagShopping className="w-8 h-8" />
            </Link>
            <button onClick={() => handelMenu(!isShow)} className="md:hidden"><HiOutlineBars3CenterLeft className="w-8 h-8" /></button>
        </div>
    )
}

export default UserActions