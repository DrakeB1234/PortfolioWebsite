import Link from 'next/link';
import React, { useState } from 'react';

export default function NavBar() {

    const [navClass, setNavClass] = useState(false)


    return (
        <>
            <div className='NavContainer DesktopNav'>
                    <Link href='/'>Home</Link>
                    <Link href='about'>About</Link>
                    <Link href='blog'>Blogs</Link>
                    <Link href='projects'>Projects</Link>
                    <Link href='contact'>Contact</Link>
            </div>
            <div className='NavContainer MobileNav'>
                <img onClick={() => setNavClass(!navClass)} src='icon-bars.svg' />
                <div onClick={() => setNavClass(!navClass)} className={navClass ? 'FlexCol active' : 'FlexCol'} style={navClass ? {display:'flex'} : {display:'none'}}>
                    <img src='icon-x.svg' />
                    <Link href='/'>Home</Link>
                    <Link href='about'>About Me</Link>
                    <Link href='blog'>Blogs</Link>
                    <Link href='projects'>Projects</Link>
                    <Link href='contact'>Contact</Link>
                </div>
            </div>
        </>
    )
}