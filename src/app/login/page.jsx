'use client'
import { signIn, useSession } from 'next-auth/react'
import styles from './Login.module.css'

const LoginPage = () => {
  const { data, status } = useSession()
  console.log(data)
  console.log(status)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          onClick={() => {
            signIn('google')
          }}
        >
          Sign in with Google
        </div>
        <div
          className={styles.socialButton}
          onClick={() => {
            signIn('github')
          }}
        >
          Sign in with GitHub
        </div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage
