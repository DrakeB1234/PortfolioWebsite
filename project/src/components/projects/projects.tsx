import Image from 'next/image'
import Link from 'next/link'
import styles from './Projects.module.css'
import imageStyles from '@/styles/Images.module.css'
import buttonStyles from '@/styles/Buttons.module.css'

export default function Projects() {
  return (
    <div className={styles.ProjectsContainer}>

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
        <Link target={'_blank'} href={'https://www.scratchifyhub.com/'}>www.scratchify.com</Link>
        <button className={buttonStyles.ClearButton}>Show More</button>
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
        <Link target={'_blank'} href={'https://devriot.itch.io/click-blitz'}>www.itch.io/click-blitz.com</Link>
        <button className={buttonStyles.ClearButton}>Show More</button>
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
        <Link target={'_blank'} href={'https://www.socialfunc.com/'}>www.socialfunc.com</Link>
        <button className={buttonStyles.ClearButton}>Show More</button>
      </div>

    </div>
  )
}
