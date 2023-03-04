import Link from 'next/link';
import React, { useState } from 'react';

export default function NavBar() {

    const [navClass, setNavClass] = useState('FlexCol')

    const toggleNav = () => {
        if(navClass === 'FlexCol') {
            setNavClass('FlexCol active');
            return
        }
        setNavClass('FlexCol');
    }

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
                <img onClick={toggleNav} src='icon-bars.svg' />
                <div onClick={toggleNav} className={navClass}>
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