import Image from 'next/image'
import Link from 'next/link'
import styles from './Skills.module.css'
import imageStyles from '@/styles/Images.module.css'

export default function Skills() {
  return (
    <div className={styles.SkillsContainer}>
      <div className={styles.Skill}>
        <Image 
        className={imageStyles.IconImage}
        alt=''
        src={'/icons/icons8-java-48.png'}
        height={48}
        width={48}
        />
        <h1>Java</h1>
      </div>
      <div className={styles.Skill}>
        <Image 
        className={imageStyles.IconImage}
        alt=''
        src={'/icons/icons8-c-48.png'}
        height={48}
        width={48}
        />
        <h1>C#</h1>
      </div>
      <div className={styles.Skill}>
        <Image 
        className={imageStyles.IconImage}
        alt=''
        src={'/icons/icons8-react-native-48.png'}
        height={48}
        width={48}
        />
        <h1>React</h1>
      </div>
      <div className={styles.Skill}>
        <Image 
        className={imageStyles.IconImage}
        alt=''
        src={'/icons/icons8-nodejs-48.png'}
        height={48}
        width={48}
        />
        <h1>NodeJS</h1>
      </div>
      <div className={styles.Skill}>
        <Image 
        className={imageStyles.IconImage}
        alt=''
        src={'/icons/icons8-mysql-48.png'}
        height={48}
        width={48}
        />
        <h1>MySQL</h1>
      </div>
      <div className={styles.Skill}>
        <Image 
        className={imageStyles.IconImage}
        alt=''
        src={'/icons/icons8-nextjs-48.png'}
        height={48}
        width={48}
        />
        <h1>NextJS</h1>
      </div>
    </div>
  )
}
