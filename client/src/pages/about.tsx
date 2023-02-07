import Head from 'next/head';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function About() {
  return (
    <>
      <Head>
        <title>Drake Buentello | About</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <main className='MainContainer AboutContainer'>
        <h1>About Me</h1>
      </main>
      <Footer />
    </>
  )
}
