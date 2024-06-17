import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

const Card = ({ key, item }) => {
  return (
    <div key={key} className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{' '}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href='/'>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          quae laudantium suscipit ex debitis? Temporibus porro nulla eum in!
          Nostrum sit facilis, quos ullam nihil reprehenderit aperiam fugit
          inventore similique!
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
