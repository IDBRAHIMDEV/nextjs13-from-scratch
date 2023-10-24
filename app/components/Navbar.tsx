import Link from 'next/link'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/users">Users</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li>
                     <UserButton afterSignOutUrl='/' />
                    </li>
                </ul>
            </div>
            </div>
    </>
  )
}

export default Navbar