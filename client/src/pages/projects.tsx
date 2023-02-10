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
            <h1>UpDownShoe</h1>
            <img className='ProjectCover' src='/project.png' />
            <h2>Stack: NEXT.js, express.js, React, MySQL</h2>
            <div className='FlexRow'>
                <img className='SkillIcon' src='/next13.png' />
                <img className='SkillIcon' src='/nodejs.png' />
                <img className='SkillIcon' src='/react.png' />
                <img className='SkillIcon' src='/mysql.png' />
            </div>
            <h3>&emsp;</h3>
            <div className='FlexRow'>
                <Link href='' target='_blank'>GitHub Repo</Link>
                <Link href='' target='_blank'>Link to Site</Link>
            </div>
        </div>
        <div className='FlexCol'>
            <h1>Grocery Central</h1>
            <img className='ProjectCover' src='/project.png' />
            <h2>Stack: Flask, MySQL</h2>
            <div className='FlexRow'>
                <img className='SkillIcon' src='/python.png' />
                <img className='SkillIcon' src='/mysql.png' />
            </div>
            <h3>&emsp;App to keep track of meal plans, grocery lists, and lookup/create recipes, all in one place! Created Using Flask for API routes, jinja templating for frontend, and MySQL for the database. Hosted on AWS.</h3>
            <div className='FlexRow'>
                <Link href='https://github.com/DrakeB1234/Grocery-Web-Application' target='_blank'>GitHub Repo</Link>
                <Link href='http://grocerycentral.link' target='_blank'>Link to Site</Link>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
