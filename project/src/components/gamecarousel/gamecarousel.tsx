import Image from 'next/image'
import Link from 'next/link'
import styles from './GameCarousel.module.css'
import imageStyles from '@/styles/Images.module.css'
import buttonStyles from '@/styles/Buttons.module.css'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

type props = {
  showMore: Boolean,
}

const gameItems = [
  {
    title: "ClickBlitz",
    imageUrl: "/projects/Clickblitz.png",
    projectUrl: ""
  }
]

export default function GameCarousel(props: props) {

  const router = useRouter();
  const {q} = router.query;

  const [showProjectDetails, setShowProjectDetails] = useState('');

  useEffect(() => {
    if (q)
    {
      setShowProjectDetails(q.toString())
    }
  }, [q])

  const [currentGameItem, setCurrentGameItem] = useState(gameItems[0]);
  
  return (
    <div className={styles.GameContainer}>
      <div className={styles.GameItem}>
        
        <Image 
        alt=''
        src={currentGameItem.imageUrl}
        height={300}
        width={300}
        />
        <h1>{currentGameItem.title}</h1>

      </div>

      <div className={styles.NavUI}>
          <h1>{"<"}</h1>
          <h1>{">"}</h1>
        </div>
    </div>
  )
}
