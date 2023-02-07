import Link from 'next/link';

export default function NavBar() {
    return (
        <div className='NavContainer'>
            <Link href='/'>Home</Link>
            <Link href='blog'>Blogs</Link>
            <Link href='about'>About</Link>
            <Link href='projects'>Projects</Link>
            <Link href='contact'>Contact</Link>
        </div>
    )
}