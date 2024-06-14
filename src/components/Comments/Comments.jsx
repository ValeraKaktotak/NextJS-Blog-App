import Image from 'next/image'
import Link from 'next/link'
import styles from './Comments.module.css'

const Comments = () => {
  const status = 'authenticated'

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder='write a comment ...'
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Snow</span>
              <span className={styles.date}>14.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas
            quia nesciunt dignissimos consequuntur doloribus deserunt asperiores
            quod incidunt corrupti. Nemo tenetur est repellat obcaecati alias
            sapiente ipsam nihil quas.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Snow</span>
              <span className={styles.date}>14.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas
            quia nesciunt dignissimos consequuntur doloribus deserunt asperiores
            quod incidunt corrupti. Nemo tenetur est repellat obcaecati alias
            sapiente ipsam nihil quas.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Snow</span>
              <span className={styles.date}>14.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas
            quia nesciunt dignissimos consequuntur doloribus deserunt asperiores
            quod incidunt corrupti. Nemo tenetur est repellat obcaecati alias
            sapiente ipsam nihil quas.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Snow</span>
              <span className={styles.date}>14.06.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas
            quia nesciunt dignissimos consequuntur doloribus deserunt asperiores
            quod incidunt corrupti. Nemo tenetur est repellat obcaecati alias
            sapiente ipsam nihil quas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments
