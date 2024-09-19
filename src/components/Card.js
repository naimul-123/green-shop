import React from 'react'

import { Rating, Star } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaBagShopping } from 'react-icons/fa6'
import { FaEye, FaRegHeart } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'
import Image from 'next/image'
const ratingStyle = {
    itemShapes: Star,
    activeFillColor: '#eeb937',
    inactiveFillColor: '#fbf1a9'
}
const Card = ({ product }) => {
    const { name,
        category,
        rating,
        totalRatingPersons,
        price,
        image,
        unit,
        isFeatured
    } = product

    return (
        <div className="card glass max-w-[264px] min-w-fit group">
            <figure>
                <Image src={image} alt={name} width={264} height={218} className="group-hover:scale-110 overflow-hidden duration-1000 transform" />

            </figure>
            <div className="card-body">
                <p className="text-lg text-[#878787]">{category}</p>
                <h2 className="text-lg text-[#222222]">{name}, {unit}</h2>
                <div className="flex gap-3">
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly itemStyles={ratingStyle} />
                    <p>{totalRatingPersons}</p>
                </div>
                <h3 className="text-2xl text-[#86bc42]">${price}</h3>
            </div>
            <div className="absolute  opacity-0  gap-2 transition transform translate-y-4  duration-1000 group-hover:opacity-100 group-hover:translate-y-0 flex top-1/2 left-1/4 right-1/4 ">
                <button className="btn btn-circle bg-[#f3e8d6] text-[#86bc42] hover:bg-[#86bc42] border-none text-lg hover:text-[#f3e8d6]"><MdOutlineShoppingBag /></button>
                <button className="btn btn-circle bg-[#f3e8d6] text-[#86bc42] hover:bg-[#86bc42] border-none text-lg hover:text-[#f3e8d6]"><FaEye /></button>
                <button className="btn btn-circle bg-[#f3e8d6] text-[#86bc42] hover:bg-[#86bc42] border-none text-lg hover:text-[#f3e8d6]"><FaRegHeart /></button>
            </div>
        </div>
    )
}

export default Card