'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import styles from './AuthLinks.module.css'

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const { data, status } = useSession()

  return (
    <>
      {status === 'authenticated' ? (
        <>
          <Link className={styles.link} href='/write'>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      ) : (
        <Link className={styles.link} href='/login'>
          Login
        </Link>
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
