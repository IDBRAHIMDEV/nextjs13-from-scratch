'use client';

import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {

  const {status, data: session} = useSession()

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
                    { status === 'authenticated' && (
                      <li className='justify-center'>
                        {session?.user?.name}
                        <img src={session?.user?.image as string} width={30} height={30} alt={session?.user?.name as string} />

                        <button onClick={ () => signOut() }>Logout</button>
                      </li>
                    ) }

                    { status === 'unauthenticated' && (
                      <li>
                        <button onClick={ () => signIn() }>Login</button>
                      </li>
                    ) }
                </ul>
            </div>
            </div>
    </>
  )
}

export default Navbar