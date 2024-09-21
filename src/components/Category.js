import Link from 'next/link'
import React from 'react'
import categoryData from '@/assets/category.json'
import Card from './Card'
import Image from 'next/image'
const Category = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24 bg-[#f8f5ee]">
            <div className="flex justify-between items-center py-6">
                <h2 className="text-3xl font-semibold text-[#222222]">Shop By Category</h2>

                <Link href="/" className="inline-flex flex-col font-semibold text-[#222222] group" ><span>Shop All Categories</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8 ">
                {categoryData?.map((product, id) => {
                    const { name, image, href, totalProducts } = product;
                    return (
                        <Link href={href} key={id} className="group">
                            <figure className="bg-white min-w-fit h-[264px]">
                                <Image src={image} alt={name} width="264" height="264" className="h-full w-full group-hover:scale-110 overflow-hidden duration-1000 transform" />
                            </figure>
                            <div className="card-body bg-transparent justify-center items-center">
                                <h2 className="card-title text-center font-semibold text-2xl">{name}</h2>
                                <p className="text-2xl text-[#868684] opacity-0 group-hover:opacity-100 duration-1000 transform">{totalProducts} {totalProducts > 1 ? "Products" : "Product"}</p>
                            </div>
                        </Link>
                    )
                }

                )}
            </div>
        </div>
    )
}

export default Category