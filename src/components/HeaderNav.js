import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa6'

const HeaderNav = ({ isShow }) => {
    return (

        <div className={`${isShow ? "md:flex flex" : "hidden md:flex"} flex-col md:flex-row justify-between bg-[#86bc42]  md:px-8 lg:px-16 xl:px-32 2xl:px-40 text-white`}>

            <nav className="uppercase flex flex-col md:flex-row text-lg font-semibold bg-inherit">
                <Link className="inline-block hover:bg-[#416218] py-1 px-3 text-center" href="/">Home</Link>
                <Link className="inline-block hover:bg-[#416218] py-1 px-3 text-center" href="/">Shop</Link>
                <Link className="inline-block hover:bg-[#416218] py-1 px-3 text-center" href="/">Collection</Link>
                <Link className="inline-block hover:bg-[#416218] py-1 px-3 text-center" href="/">Journal</Link>
                <Link className="inline-block hover:bg-[#416218] py-1 px-3 text-center" href="/">Page</Link>

            </nav>
            <nav className="uppercase flex flex-col md:flex-row text-lg font-semibold bg-inherit" >
                <Link className="inline-block hover:bg-[#416218] py-1 px-3 text-center" href="/">Special offer</Link>
                <Link className="inline-block hover:bg-[#416218] py-1 px-3 text-center" href="/">Purchase theme </Link>
            </nav>
        </div>



    )
}

export default HeaderNav