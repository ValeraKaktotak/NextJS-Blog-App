import Comments from '@/components/Comments/Comments'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import styles from './SinglePage.module.css'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Snow</span>
              <span className={styles.date}>14.06.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur iure, consequatur vel non assumenda dignissimos deserunt
              rerum maxime ipsam voluptate fuga id labore tempora delectus,
              explicabo quisquam quasi aliquam.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur iure, consequatur vel non assumenda dignissimos deserunt
              rerum maxime ipsam voluptate fuga id labore tempora delectus,
              explicabo quisquam quasi aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tenetur iure, consequatur vel non assumenda dignissimos deserunt
              rerum maxime ipsam voluptate fuga id labore tempora delectus,
              explicabo quisquam quasi aliquam.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
