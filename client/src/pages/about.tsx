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
                <h3>Computer Science Student</h3>
            </div>
            <div className='FlexCol'>
              <h2>&emsp;I&apos;m a enthusiast of new techonolgies and a strong adapter of them. I believe to be successful in programming is to look deeper beyond abstraction, to understand what really makes it work.</h2>
              <h2>&emsp;I am currently a student enrolled at Wilmington Univeristy, working towards a BA of Computer Science. I have significant knowledge of both backend and frontend technologies and industry standard frameworks.</h2>
              <h2>&emsp;Collaboration is just as important to me as being able to adapt to new situations and adoptions with research and testing.</h2>
            </div>
          </div>
          <div className='SkillsContainer'>
            <h1>Skills</h1>
            <div className='FlexRow'>
              <div className='FlexCol'>
                <h1>Frontend</h1>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/html.png' />
                  <h2>HTML/CSS</h2>
                </div>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/javascript.png' />
                  <h2>Javascript</h2>
                </div>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/react.png' />
                  <h2>React</h2>
                </div>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/next13.png' />
                  <h2>NEXT.js</h2>
                </div>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/bootstrap.png' />
                  <h2>Bootstrap</h2>
                </div>
              </div>
              <div className='FlexCol'>
                <h1>Backend</h1>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/python.png' />
                  <h2>Flask</h2>
                </div>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/nodejs.png' />
                  <h2>Express.js</h2>
                </div>
                <div className="FlexRow">
                  <img className='SkillIcon' src='/mysql.png' />
                  <h2>MySQL</h2>
                </div>
              </div>
            </div>
          </div>
      </main>
      <Footer />
    </>
  )
}
