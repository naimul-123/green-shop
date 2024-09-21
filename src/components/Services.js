import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
import { FaGift } from "react-icons/fa6";

const Services = () => {
    return (
        <div className="bg-[#f8f5ee] justify-center grid grid-cols-1 sm:grid-cols-2 w-full mx-auto xl:grid-cols-4 px-10 py-5 gap-4">
            <div className="flex flex-col sm:flex-row justify-center text-center sm:text-left items-center gap-3">
                <div>
                    <MdOutlineShoppingCart className="text-5xl text-[#86bc42]" />
                </div>
                <div>
                    <h6 className="font-bold ">Fast and Free Delivery</h6>
                    <p className="text-[#a6a5a3] ">Free delivery for all orders over $140</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center text-center sm:text-left items-center gap-3">
                <div>
                    <TfiHeadphoneAlt className="text-5xl text-[#86bc42]" />
                </div>
                <div>
                    <h6 className="font-bold ">24/7 Customer Support</h6>
                    <p className="text-[#a6a5a3] ">Friendly 24/7 Customer Support</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center text-center sm:text-left items-center gap-3">
                <div>
                    <LuShieldCheck className="text-5xl text-[#86bc42]" />
                </div>
                <div>
                    <h6 className="font-bold ">Money Back Guarantee</h6>
                    <p className="text-[#a6a5a3] ">We return money within 30 days</p>

                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center text-center sm:text-left items-center gap-3">
                <div>
                    <FaGift className="text-5xl text-[#86bc42]" />
                </div>
                <div>
                    <h6 className="font-bold ">Member Gifts</h6>
                    <p className="text-[#a6a5a3] ">Discount coupons weekends</p>
                </div>
            </div>
        </div>
    )
}

export default Services