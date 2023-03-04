import Head from 'next/head';
import Link from 'next/link';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Drake Buentello</title>
      </Head>
      <NavBar />
      <main className='MainContainer IndexContainer'>
        <h1>Hi, I&apos;m <span>Drake Buentello</span></h1>
        <h2>Computer Science Undergraduate</h2>
        <h3>Read more <Link href='about'><span>about me</span></Link> or <Link href='contact'><span>contact me</span></Link></h3>
      </main>
      <Footer />
    </>
  )
}
