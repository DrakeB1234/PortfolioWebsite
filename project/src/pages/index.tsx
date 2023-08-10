import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import imageStyles from '@/styles/Images.module.css'
import { Roboto } from 'next/font/google'

import Socialbar from '@/components/socialbar/socialbar'
import Skills from '@/components/skills/skills'
import Projects from '@/components/projects/projects'
import Navbar from '@/components/navbar/navbar'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Drake Buentello | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main + ' ' + roboto.className}>
        <div className={styles.IntroContainer}>
          <div className={styles.MeImageContainer}>
            <Image
            className={imageStyles.MeImage}
            alt='me.jpg'
            src={'/ME.jpg'}
            height={280}
            width={280}
            />
          </div>
          <div className={styles.MeDescriptionContainer}>
            <h1>Hello</h1>
            <h2>I&apos;m <span>Drake Buentello</span></h2>
          </div>
        </div>

        <Socialbar />

        <div className={styles.ContentParent}>

          <h1 className={styles.SectionHeader}>About Me</h1>
          <div className={styles.AboutContainer}>
            <div className={styles.TextContainer}>
              <h2>I&apos;m a enthusiast of new techonolgies and a strong adapter of them. I believe to be successful in programming is to look deeper beyond abstraction, to understand what really makes it work.</h2>
              <h2>I am currently a student enrolled at Wilmington Univeristy, working towards a BA of Computer Science. I have significant knowledge of both backend and frontend technologies and industry standard frameworks.</h2>
            </div>
          </div>

          <h1 className={styles.SectionHeader}>Skills</h1>
          <Skills />

          <h1 className={styles.SectionHeader}>Projects</h1>
          <Projects showMore={false}/>

        </div>
      </main>
    </>
  )
}
