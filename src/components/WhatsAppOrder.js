import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const WhatsAppOrder = () => {
    return (

        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-3 md:py-6 lg:py-9 xl:py-12 2xl:py-18 bg-[#86bc42] text-white flex flex-col md:flex-row justify-between items-center text-2xl">
            <button className="flex flex-col md:flex-row items-center gap-3 ">
                <FaWhatsapp className="text-5xl" />
                <span>Whatsapp Ordering Service</span>
            </button>
            <Link className="inline-flex flex-col md:flex-row justify-center items-center gap-2" href="/">Place Order At <span className="text-[#064e38] font-medium"> +1 246-345-0695</span></Link>
        </div>


    )
}

export default WhatsAppOrder