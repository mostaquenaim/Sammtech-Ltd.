'use client'

import Image from "next/image";
import Link from "next/link";

// home

// about us

// services

// solutions

// products

// FAQ

// contact us

const listItems = <>
    <li><Link href={`/`}>Home</Link></li>
    <li><Link href={`/`}>About us</Link></li>
    <li><Link href={`/`}>Services & Solutions</Link></li>
    {/* <li><Link href={`/`}>Solutions</Link></li> */}
    <li><Link href={`/`}>Products</Link></li>
    <li><Link href={`/`}>FAQ</Link></li>
    {/* <li><Link href={`/`}>Contact us</Link></li> */}
</>

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {listItems}
                        </ul>
                    </div>
                    <Link href={`#`} className="btn btn-ghost text-xl">
                        <Image
                            alt="sammtech logo"
                            width={50}
                            height={50}
                            src={`/sammtech.jpg`} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={`#`} className="btn btn-primary">
                        Contact us
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;