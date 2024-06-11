'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './AuthLinks.module.css'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  //todo
  const status = 'not authenticated'
  return (
    <>
      {status === 'not authenticated' ? (
        <Link className={styles.link} href='/login'>
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href='/write'>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/about'>About</Link>
          {status === 'not authenticated' ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
