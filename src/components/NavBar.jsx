
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ThemeToggle from './ThemeToggle';
import { signOut, useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';

function NavBar() {


    const { data, isPending } = useSession();

    if (isPending) {
        <h2>Loading....</h2>
    }

    const user = data?.user;

    console.log(user)

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
                        {
                            user ? <div className='flex  items-center gap-4'><p>{user.name}</p>
                                <Button onClick={()=> signOut()}>Logout</Button>
                            </div> : <li className={isActive("/auth/signin")}><Link href={"/auth/signin"}>SignIn</Link></li>
                        }
                    </ul>
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default NavBar