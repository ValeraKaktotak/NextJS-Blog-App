import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {item.img && (
          <Image src={item.img} alt='' fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{' '}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/post/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 100)}...</p>
        <Link href={`/post/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
