import Link from 'next/link'
import React from 'react'

const HeaderNav = () => {
    return (
        <div className="top-nav">

            <nav className="nav-menu">
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Collection</Link>
                <Link href="/">Journal</Link>
                <Link href="/">Page</Link>

            </nav>
            <nav className="nav-menu" >
                <Link href="/">Special offer</Link>
                <Link href="/">Purchase theme </Link>
            </nav>
        </div>
    )
}

export default HeaderNav