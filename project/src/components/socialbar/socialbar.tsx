import Image from 'next/image'
import Link from 'next/link'
import styles from './Socialbar.module.css'
import imageStyles from '@/styles/Images.module.css'

export default function SocialBar() {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.IconContainer}>
        <Link target='_blank' href='https://github.com/DrakeB1234'>
          <Image 
          alt=''
          src={'/icons/icons8-github-48.png'}
          height={40}
          width={40}
          />
        </Link>
        <Link target='_blank' href='https://www.linkedin.com/in/drake-buentello-416b80251/'>
          <Image 
            alt=''
            src={'/icons/icons8-linkedin-48.png'}
            height={40}
            width={40}
            />
        </Link>
        <Link target='_blank' href='https://www.youtube.com/channel/UCOWINDlMZhrZiu5dmpwmj5Q'>
          <Image 
          alt=''
          src={'/icons/icons8-youtube-48.png'}
          height={40}
          width={40}
          />
        </Link>
        <Link href='mailto: dbuentello211607@gmail.com'>
          <Image 
          alt=''
          src={'/icons/icons8-email-50.png'}
          height={36}
          width={36}
          />
        </Link>
      </div>
      <h1>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></h1>
    </div>
  )
}
