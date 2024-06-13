import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>13.06.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p1 className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          quae laudantium suscipit ex debitis? Temporibus porro nulla eum in!
          Nostrum sit facilis, quos ullam nihil reprehenderit aperiam fugit
          inventore similique!
        </p1>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
