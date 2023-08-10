import Image from 'next/image'
import Link from 'next/link'
import styles from './Projects.module.css'
import imageStyles from '@/styles/Images.module.css'
import buttonStyles from '@/styles/Buttons.module.css'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

type props = {
  showMore: Boolean,
}

export default function Projects(props: props) {

  const router = useRouter();
  const {q} = router.query;

  const [showProjectDetails, useShowProjectDetails] = useState('');

  useEffect(() => {
    if (q)
    {
      useShowProjectDetails(q.toString())
    }
  }, [q])
  
  return (
    <div className={styles.ProjectsContainer}>
      {showProjectDetails == ''
      ?
      <>
        <div className={styles.Project}>
          <Image 
          className={imageStyles.ProjectImage}
          alt=''
          src={'/projects/Scratchify.png'}
          height={250}
          width={250}
          quality={100}
          />
          <h1>Scratchify</h1>
          <h2>A recipe and mealplanning webapp that allows you to create an account and post and save your favorite recipes!</h2>
          {/* change between link and react buttons */}
          {props.showMore
          ?
          <button className={buttonStyles.ClearButton}
          onClick={() => useShowProjectDetails("scratchify")}
          >Show More</button>
          :
          <a className={buttonStyles.ClearButton} href={'/projects?q=scratchify'}>Show More</a>
          }
        </div>
        <div className={styles.Project}>
          <Image 
          className={imageStyles.ProjectImage}
          alt=''
          src={'/projects/Clickblitz.png'}
          height={250}
          width={250}
          quality={100}
          />
          <h1>Click Blitz</h1>
          <h2>A android game that has the player tap as many balls as they can on the screen before running out of time!</h2>
          {/* change between link and react buttons */}
          {props.showMore
          ?
          <button className={buttonStyles.ClearButton}
          onClick={() => useShowProjectDetails("clickblitz")}
          >Show More</button>
          :
          <a className={buttonStyles.ClearButton} href={'/projects?q=clickblitz'}>Show More</a>
          }      
        </div>
        <div className={styles.Project}>
          <Image 
          className={imageStyles.ProjectImage}
          alt=''
          src={'/projects/Socialfunc.png'}
          height={250}
          width={250}
          quality={100}
          />
          <h1>SocialFunc</h1>
          <h2>A experimental website that aims to use websockets to connect players together and play games!</h2>
          {/* change between link and react buttons */}
          {props.showMore
          ?
          <button className={buttonStyles.ClearButton}
          onClick={() => useShowProjectDetails("socialfunc")}
          >Show More</button>
          :
          <a className={buttonStyles.ClearButton} href={'/projects?q=socialfunc'}>Show More</a>
          }  
        </div>
      </>
      :
      showProjectDetails == "scratchify"
      ?
        <div className={styles.FullProjectContainer}>
          <h1>Scratchify</h1>
          <p>One stop place for all of your cooking and mealplanning needs. Create an account and save recipes, create detailed mealplans, and even make
            your own recipes for others to get inspiration!
          </p>
          <p>Fullstack application using NextJS to handle frontend and APIs, Supabase for Postgres database, User authentication, and image buckets.</p>
          <Link target='_blank' href='https://www.scratchifyhub.com'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>www.scrathifyhub.com</Link>
          <hr></hr>
          <h2>Stack</h2>
          <div className={styles.StackContainer}>
            <h1>NextJS</h1>
            <h1>React</h1>
            <h1>Supabase</h1>
            <h1>React</h1>
            <h1>Postgres</h1>
          </div>

          <h2>Deployments</h2>
          <div className={styles.DeploymentsContainer}>
            <h1>Web</h1>
            <h1>Vercel</h1>
          </div>

          <h2>Screenshots</h2>
          <div className={styles.ScreenshotsContainer}>
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/Scratchify.png'}
            height={250}
            width={250}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ScratchifyList.png'}
            height={250}
            width={250}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ScratchifyPlanner.png'}
            height={250}
            width={250}
            quality={100}
            />
          </div>

          <button className={buttonStyles.ClearButton}
          onClick={() => useShowProjectDetails("")}
          >Show Less</button>
        </div>
      :
      showProjectDetails == "clickblitz"
      ?
        <div className={styles.FullProjectContainer}>
          <h1>Click Blitz</h1>
          <p>A android game that has the player tap as many balls as they can on the screen before running out of time, make sure to catch the special effects balls to add more time and more!</p>
          <p>Android and WebGL game made using Unity and currently deployed on both Itch.io and the Google Play Store.</p>
          <Link target='_blank' href='https://devriot.itch.io/click-blitz'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>www.itch.io/click-blitz.com</Link>
          <hr></hr>
          <h2>Stack</h2>
          <div className={styles.StackContainer}>
            <h1>C#</h1>
            <h1>Unity</h1>
          </div>

          <h2>Deployments</h2>
          <div className={styles.DeploymentsContainer}>
            <h1>Google Play</h1>
            <h1>Itch.io</h1>
          </div>

          <h2>Screenshots</h2>
          <div className={styles.ScreenshotsContainer}>
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/Clickblitz.png'}
            height={250}
            width={250}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ClickblitzPlay.png'}
            height={250}
            width={250}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ClickblitzHowto.png'}
            height={250}
            width={250}
            quality={100}
            />
          </div>

          <button className={buttonStyles.ClearButton}
          onClick={() => useShowProjectDetails("")}
          >Show Less</button>
        </div>
      :
      showProjectDetails == "socialfunc"
      ?
        <div className={styles.FullProjectContainer}>
          <h1>Socialfunc</h1>
          <p>A android game that has the player tap as many balls as they can on the screen before running out of time, make sure to catch the special effects balls to add more time and more!</p>
          <p>Android and WebGL game made using Unity and currently deployed on both Itch.io and the Google Play Store.</p>
          <Link target='_blank' href='https://socialfunc.com'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>www.socialfunc.com</Link>
          <hr></hr>
          <h2>Stack</h2>
          <div className={styles.StackContainer}>
            <h1>NextJS</h1>
            <h1>React</h1>
            <h1>Sockets.io</h1>
            <h1>Supabase</h1>
            <h1>React</h1>
            <h1>Postgres</h1>
          </div>

          <h2>Deployments</h2>
          <div className={styles.DeploymentsContainer}>
            <h1>Web</h1>
            <h1>Vercel</h1>
          </div>

          <h2>Screenshots</h2>
          <div className={styles.ScreenshotsContainer}>
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/Socialfunc.png'}
            height={250}
            width={250}
            quality={100}
            />
          </div>

          <button className={buttonStyles.ClearButton}
          onClick={() => useShowProjectDetails("")}
          >Show Less</button>
        </div>
      :
      <div className={styles.FullProjectContainer}>
        <button className={buttonStyles.ClearButton}
        onClick={() => useShowProjectDetails("")}
        >Show Less</button>
      </div>
      }
    </div>
  )
}
