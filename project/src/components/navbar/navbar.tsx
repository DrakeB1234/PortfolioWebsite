import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import imageStyles from '@/styles/Images.module.css'
import buttonStyles from '@/styles/Buttons.module.css'
import {useRouter} from 'next/router'; 

export default function Navbar() {

  const router = useRouter();
  
  return (
    <div className={styles.NavbarContainer}>
      <Link href={'/'} className={router.pathname == '/' ? styles.ActiveLink : styles.UnActiveLink}>Home</Link>
      <Link href={'/projects'} className={router.pathname == '/projects' ? styles.ActiveLink : styles.UnActiveLink}>Projects</Link>
    </div>
  )
}
