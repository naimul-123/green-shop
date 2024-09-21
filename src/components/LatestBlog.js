import Link from 'next/link'
import React from 'react'
import blogs from '@/assets/blog.json'
import Image from 'next/image'
import moment from 'moment'
const LatestBlog = () => {
    const latestBlog = blogs.sort((a, b) => new Date(b.blog_time) - new Date(a.blog_time)).slice(0, 4)
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24 bg-[#f8f5ee]">
            <div className="flex justify-between items-center py-6">
                <h2 className="text-3xl font-semibold text-[#222222]">Latest in Blog</h2>

                <Link href="/" className="inline-flex flex-col font-semibold text-[#222222] group" ><span>See All Blog</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-8 ">
                {latestBlog?.map((blog) => {
                    const { id, title, writer, blog_time, image } = blog;
                    return (
                        <div key={id} className="group">
                            <div className="h-[220px] w-[330px] relative overflow-hidden">
                                <Image src={image} alt={title} width="330" height="220" className="group-hover:scale-105 transition-transform duration-1000 h-full" />

                            </div>
                            <div className=" px-8 py-7">
                                <div className="text-lg font-semibold text-[#767676] uppercase flex flex-col">
                                    <h3 className="">By {writer}</h3>
                                    <h3 className="">{moment(blog_time).format('LL')}</h3>
                                </div>
                                <h2 className="text-2xl font-semibold text-[#222222]">{title}</h2>
                            </div>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    )
}


export default LatestBlog