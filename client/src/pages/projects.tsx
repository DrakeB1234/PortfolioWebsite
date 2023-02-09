import Head from 'next/head';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Drake Buentello | Projects</title>
      </Head>
      <NavBar />
      <main className='MainContainer ProjectContainer'>
        <h1>Projects</h1>
        <div className='FlexCol'>
            <h1>Grocery Central</h1>
            <img src='/project.png' />
            <h2>App to keep track of meal plans, grocery lists, and lookup/create recipes, all in one place!</h2>
            <Link href='http://grocerycentral.link'>Link to Site</Link>
        </div>
        <div className='FlexCol'>
            <h1>Grocery Central</h1>
            <img src='/project.png' />
            <h2>App to keep track of meal plans, grocery lists, and lookup/create recipes, all in one place!</h2>
            <Link href='http://grocerycentral.link'>Link to Site</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
