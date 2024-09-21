"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaAngleUp } from 'react-icons/fa6'

const FooterBotton = () => {
    const [language, setLanguage] = useState('United Kingdom | English');
    const [isshowLangOpt, setIsShowLangOpt] = useState(false)
    const handleLang = (lan) => {
        setLanguage(lan)
        setIsShowLangOpt(false)

    }
    const [currency, setCurrency] = useState('USD');
    const [isshowCurOpt, setIsShowCurOpt] = useState(false)
    const handleCur = (cur) => {
        setCurrency(cur)
        setIsShowCurOpt(false)

    }
    return (

        <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center text-white p-10 border-t border-[#21604d] gap-2 text-center">
            <div className="">
                <p>&copy; {new Date().getFullYear()} Uomo</p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 items-center justify-center ">
                <div className="flex gap-2 items-center  text-center justify-center  min-w-max">
                    <p>Language</p>
                    <p>{language}</p>
                    <button className="" onClick={() => setIsShowLangOpt(true)}><FaAngleUp /></button>
                    <div className={` bg-white  text-black shrink-0 absolute ${isshowLangOpt ? "block" : "hidden"}`} >
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleLang('United Kingdom | English')}>United Kingdom | English</button>
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleLang('United State | English')}>United State | English</button>
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleLang('Bangladesh | Bengali')}>Bangladesh | Bengali</button>
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleLang('India | English')}>India | English</button>
                    </div>
                </div>
                <div className="flex gap-2 items-center w-full text-center justify-center  min-w-max">
                    <p>Currency</p>
                    <p>{currency}</p>
                    <button className="" onClick={() => setIsShowCurOpt(true)}><FaAngleUp /></button>

                    <div className={` bg-white  text-black shrink-0 absolute ${isshowCurOpt ? "block" : "hidden"}`} >
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleCur('EUR')}>EUR</button>
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleCur('USD')}>USD</button>
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleCur('BDT')}>BDT</button>
                        <button className="block hover:bg-gray-200 px-3 py-2 w-full text-left" onClick={() => handleCur('RUP')}>RUP</button>
                    </div>

                </div>
            </div>

            <div>
                <Link href="/" className="btn btn-circle "><FaAngleUp /></Link>
            </div>
        </footer >


    )
}

export default FooterBotton