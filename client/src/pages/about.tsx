import Head from 'next/head';
import NavBar from './components/navbar';
import Footer from './components/footer';

export default function About() {
  return (
    <>
      <Head>
        <title>Drake Buentello | About</title>
      </Head>
      <NavBar />
      <main className='MainContainer AboutContainer'>
      <h1>About Me</h1>
        <div className='AboutDescContainer'>
          <div className='ImageContainer FlexCol'>
              <img src='/ME.jpg' alt='pic of me'></img>
                <h2>Drake Buentello</h2>
                <h2>Computer Science Student</h2>
            </div>
            <div>
              <h2>I'm a enthusiast of new techonolgies and a strong adapter of them.</h2>
              <h2>I am currently a student enrolled at Wilmington Univeristy, working towards a BA of Computer Science.</h2>
              <h2>I believe to be successful in programming is to look deeper beyond abstraction, to understand what really makes it work.</h2>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
