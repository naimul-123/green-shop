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
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24 bg-[#064e38]">

            <footer className="footer text-white p-10 border-t border-[#21604d] justify-between">
                <p>
                    &copy; {new Date().getFullYear()} Uomo
                </p>
                <div className="flex gap-3 justify-center ">
                    <div className="flex shrink-0 gap-2 items-center w-full relative">
                        <p>Language</p>
                        <p>{language}</p>


                        <button className="" onClick={() => setIsShowLangOpt(true)}><FaAngleUp /></button>

                        <div className={`flex-col bg-white p-4 gap-3 text-black shrink-0 absolute ${isshowLangOpt ? "flex" : "hidden"}`} >
                            <button onClick={() => handleLang('United Kingdom | English')}>United Kingdom | English</button>
                            <button onClick={() => handleLang('United State | English')}>United State | English</button>
                            <button onClick={() => handleLang('Bangladesh | Bengali')}>Bangladesh | Bengali</button>
                            <button onClick={() => handleLang('India | English')}>India | English</button>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center w-full relative ">
                        <p>Currency</p>
                        <p>{currency}</p>
                        <button className="" onClick={() => setIsShowCurOpt(true)}><FaAngleUp /></button>

                        <div className={`flex-col bg-white p-4 gap-3 text-black shrink-0 absolute ${isshowCurOpt ? "flex" : "hidden"}`} >
                            <button onClick={() => handleCur('EUR')}>EUR</button>
                            <button onClick={() => handleCur('USD')}>USD</button>
                            <button onClick={() => handleCur('BDT')}>BDT</button>
                            <button onClick={() => handleCur('RUP')}>RUP</button>
                        </div>
                        <Link href="/" className="btn btn-circle absolute -right-20 -bottom-5"><FaAngleUp /></Link>
                    </div>
                </div>

            </footer >

        </div >
    )
}

export default FooterBotton