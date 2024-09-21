''
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/image/logo.png'
import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa6'
import FooterBotton from './FooterBottom'
const Footer = () => {

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-24 bg-[#064e38]">
            <footer className=" flex items-start gap-2 flex-col md:flex-row justify-center text-white text-center pb-10 md:text-left">
                <div className="flex flex-col justify-center items-center w-full text-center">

                    <Link href="/" className="block w-full mx-auto" /><Image src={logo} width={100} height={100} alt="alt" />

                    <p className="p-0"> 1418 River Drive, Suite 35 Cottonhall, CA 9622, <br></br> United States </p>
                    <div>

                    </div>
                    <p className="p-0">sale@uomo.com</p>
                    <p>+1246-345-0695</p>
                    <div className="flex items-center justify-center gap-8">
                        <Link href="/"><FaFacebookF /> </Link>
                        <Link href="/"><FaTwitter /> </Link>
                        <Link href="/"><FaInstagram /> </Link>
                        <Link href="/"><FaYoutube /> </Link>
                        <Link href="/"><FaPinterestP /> </Link>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center w-full text-center gap-3">
                    <div className="flex gap-2 justify-center flex-col">
                        <h6 className="footer-title opacity-100">Company</h6>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>About Us</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Careers</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Affiliates</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Blog</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Contact Us</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                    </div>
                    <div>
                        <h6 className="footer-title opacity-100">Shop</h6>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>New Arrivals</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Accessories</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Men</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Women</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Shop All</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>

                    </div>
                    <div>
                        <h6 className="footer-title opacity-100">Help</h6>

                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Customer Service</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>My Account</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Find a Store</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Legal & Privacy</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Contact</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>
                        <Link href="/" className="inline-flex flex-col font-semibold group" ><span>Gift Card</span > <span className={`bg-[#222222] h-0.5 w-1/2 inline-block  group-hover:opacity-100 transition duration-[1500ms] opacity-0`}></span></Link>

                    </div>
                </div>
                <div className="flex justify-center flex-col items-center w-full text-center gap-3">
                    <h6 className="footer-title opacity-100">Subscribe</h6>
                    <p>Be the first to get the latest news about trends, <br></br> Promostions, and much more!</p>

                    <form className=" flex bg-white text-[#222222] min-w-fit">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="p-3 border-none outline-none grow" />
                        <button className="p-3 text-[#222222] uppercase text-lg">Join</button>
                    </form>
                    <div className="flex flex-col justify-between items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <FaApple className="text-5xl" />
                            <h2 className="text-lg">Download on the <br></br><span className="text-2xl">Apple Store</span></h2>
                        </Link>
                        <Link href="/" className="flex items-center gap-2">
                            <FaGooglePlay className="text-5xl" />
                            <h2 className="text-lg">Get in on <br></br><span>Google Play</span></h2>
                        </Link>

                    </div>
                </div>
            </footer>
            <FooterBotton />
        </div>

    )
}

export default Footer