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

  const [showProjectDetails, setShowProjectDetails] = useState('');

  useEffect(() => {
    if (q)
    {
      setShowProjectDetails(q.toString())
    }
  }, [q])
  
  return (
    <>
    {showProjectDetails == ''
    ?
    <div className={styles.ProjectsContainer}>
        <div className={styles.Project}>
          <Image 
          className={imageStyles.ProjectImage}
          alt=''
          src={'/projects/Scratchify.png'}
          height={1000}
          width={1000}
          quality={100}
          />
          <h1>Scratchify</h1>
          <h2>A recipe and mealplanning webapp that allows you to create an account and post and save your favorite recipes!</h2>
          {/* change between link and react buttons */}
          {props.showMore
          ?
          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("scratchify")}
          >Show More</button>
          :
          <a className={buttonStyles.ClearButton} href={'/projects?q=scratchify'}>Show More</a>
          }
        </div>
        <div className={styles.Project}>
          <Image 
          className={imageStyles.ProjectImage}
          alt=''
          src={'/projects/tastyscrapeshome.png'}
          height={1000}
          width={1000}
          quality={100}
          />
          <h1>Tastyscrapes</h1>
          <h2>A recipe scraping app that removes lots of fluff found commonly on recipe websites!</h2>
          {/* change between link and react buttons */}
          {props.showMore
          ?
          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("tastyscrapes")}
          >Show More</button>
          :
          <a className={buttonStyles.ClearButton} href={'/projects?q=tastyscrapes'}>Show More</a>
          }
        </div>
        <div className={styles.Project}>
          <Image 
          className={imageStyles.ProjectImage}
          alt=''
          src={'/projects/Clickblitz.png'}
          height={1000}
          width={1000}
          quality={100}
          />
          <h1>Click Blitz</h1>
          <h2>A android game that has the player tap as many balls as they can on the screen before running out of time!</h2>
          <a>PLAYABLE GAME</a>
          {/* change between link and react buttons */}
          {props.showMore
          ?
          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("clickblitz")}
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
          height={1000}
          width={1000}
          quality={100}
          />
          <h1>SocialFunc</h1>
          <h2>A experimental website that aims to use websockets to connect players together and play games!</h2>
          {/* change between link and react buttons */}
          {props.showMore
          ?
          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("socialfunc")}
          >Show More</button>
          :
          <a className={buttonStyles.ClearButton} href={'/projects?q=socialfunc'}>Show More</a>
          }  
        </div>
      </div>
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
          <Link target='_blank' href='https://github.com/DrakeB1234/Scratchify'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>Github Repo</Link>
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
            height={1000}
            width={1000}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ScratchifyList.png'}
            height={1000}
            width={1000}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ScratchifyPlanner.png'}
            height={1000}
            width={1000}
            quality={100}
            />
          </div>

          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("")}
          >Show Less</button>
        </div>
      :
      showProjectDetails == "tastyscrapes"
      ?
        <div className={styles.FullProjectContainer}>
          <h1>Tastyscrapes</h1>
          <p>A recipe scraping app that removes lots of fluff found commonly on recipe websites!</p>
          <p>Scrapes html from provided URL, formats the important data, then allows user to save, edit, and print recipes!</p>
          <p>Everything is with local storage, so databases of recipes can be exported from a device and imported to others with a simple file!</p>
          <Link target='_blank' href='https://tastyscrapeshome.com'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>www.tastyscrapes.com</Link>
          <Link target='_blank' href='https://github.com/DrakeB1234/RecipeScraperApp'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>Github Repo</Link>
          <hr></hr>
          <h2>Stack</h2>
          <div className={styles.StackContainer}>
            <h1>NextJS</h1>
            <h1>React</h1>
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
            src={'/projects/tastyscrapeshome.png'}
            height={1000}
            width={1000}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/tastyscrapes.png'}
            height={1000}
            width={1000}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/tastyscrapessettings.png'}
            height={1000}
            width={1000}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/tastyscrapesrobo.png'}
            height={1000}
            width={1000}
            quality={100}
            />
          </div>

          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("")}
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
          <h3>* Recommended to play on a mobile device!</h3>
          <iframe src="https://itch.io/embed-upload/8478594?color=333333" allowFullScreen={true} width="640" height="380"><a href="https://devriot.itch.io/click-blitz">Play Click Blitz on itch.io</a></iframe>

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
            height={1000}
            width={1000}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ClickblitzPlay.png'}
            height={1000}
            width={1000}
            quality={100}
            />
            <Image 
            className={imageStyles.ProjectImage}
            alt=''
            src={'/projects/ClickblitzHowto.png'}
            height={1000}
            width={1000}
            quality={100}
            />
          </div>

          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("")}
          >Show Less</button>
        </div>
      :
      showProjectDetails == "socialfunc"
      ?
        <div className={styles.FullProjectContainer}>
          <h1>Socialfunc</h1>
          <p>A experimental platform made to connect players together using websockets and socket.io to play games together through the convience of a web browser!</p>
          <p>Heavily utilized websockets and socket.io to create rooms and keep players connected to each other in order to play games.</p>
          <Link target='_blank' href='https://socialfunc.com'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>www.socialfunc.com</Link>
          <Link target='_blank' href='https://github.com/DrakeB1234/ProjectSocialFunc'><Image alt='' src={'/icons/icon-logout-outline.svg'} height={15} width={15}/>Github Repo</Link>
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
            height={1000}
            width={1000}
            quality={100}
            />
          </div>

          <button className={buttonStyles.ClearButton}
          onClick={() => setShowProjectDetails("")}
          >Show Less</button>
        </div>
      :
      <div className={styles.FullProjectContainer}>
        <button className={buttonStyles.ClearButton}
        onClick={() => setShowProjectDetails("")}
        >Show Less</button>
      </div>
      }
    </>
  )
}
