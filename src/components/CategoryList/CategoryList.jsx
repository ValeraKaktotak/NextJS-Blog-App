import Image from 'next/image'
import Link from 'next/link'
import styles from './CategoryList.module.css'

const getCategories = async () => {
  const res = await fetch('http://localhost:3000/api/categories')
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

const CategoryList = async () => {
  const data = await getCategories()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            key={item.id}
            href={`/blog?cat=${item.title}`}
            className={`${styles.category} ${styles[item.title]}`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
