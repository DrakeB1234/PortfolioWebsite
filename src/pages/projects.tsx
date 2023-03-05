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
        <div className='FlexRow'>
          <div className='FlexCol'>
              <h1>SocialFunc</h1>
              <img className='ProjectCover' src='/appbanner-socialfunc.png' />
              <h2>Stack: NEXT.js, React, MySQL, Supabase</h2>
              <div className='FlexRow'>
                  <img className='SkillIcon' src='/next13.png' />
                  <img className='SkillIcon' src='/nodejs.png' />
                  <img className='SkillIcon' src='/react.png' />
                  <img className='SkillIcon' src='/mysql.png' />
                  <img className='SkillIcon' src='/supabase.svg' />
              </div>
              <h3>&emsp;Socialfunc is a web platform aimed at groups of family and friends to get together 
                and play some fun and interactable games! Whether you are using one device for the whole family,
                or prefer all to have their own, their is a game for you!
              </h3>
              <div className='FlexRow'>
                  <Link href='https://github.com/DrakeB1234/ProjectSocialFunc' target='_blank'>GitHub Repo</Link>
                  <Link href='https://socialfunc.com' target='_blank'>Link to Site</Link>
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
        </div>
      </main>
      <Footer />
    </>
  )
}
