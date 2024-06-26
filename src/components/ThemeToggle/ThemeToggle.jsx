'use client'

import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import { useContext } from 'react'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src='/moon.png' alt='moon' width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></div>
      <Image src='/sun.png' alt='sun' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
