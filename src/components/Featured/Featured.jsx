import Image from 'next/image'
import styles from './Featured.module.css'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hi, this is my first blog app in Next.JS!!! <b>Enjoy!!!</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            sint et vitae illo laboriosam ut repudiandae numquam nisi, facilis
            vel voluptatum veritatis in placeat iusto cum dignissimos. Velit,
            praesentium qui!
          </p>
          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
