'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from './Login.module.css'

const LoginPage = () => {
  const { data, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }

  // if (status === 'authenticated') {
  //   router.push('/')
  // }
  if (status === 'authenticated') {
    setTimeout(() => {
      router.push('/')
    }, 0)

    return null
  }

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
      </div>
    </div>
  )
}

export default LoginPage
