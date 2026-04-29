
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavBar() {

    const namePath = usePathname();

    const isActive = (path) => {
        return namePath === path ? "text-blue-500" : "";
    }

    return (
        <div className='py-2 px-16 shadow'>
            <div className='flex justify-between items-center gap-10 '>

                <div className='text-3xl font-bold'>Logo</div>
                <div>
                    <ul className='flex justify-center items-center gap-10 '>
                        <li className={isActive("/")} ><Link href={"/"}>Home</Link></li>
                        <li><Link href={"#"}>About</Link></li>
                        <li><Link href={"#"}>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-5 '>
                        <li className='btn '><Link href={"#"}>SignIn</Link></li>
                        <li className={isActive("/auth/signup")} ><Link href={"/auth/signup"}>SignUp</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar