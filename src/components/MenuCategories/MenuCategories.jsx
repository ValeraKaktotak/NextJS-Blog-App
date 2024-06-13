import Link from 'next/link'
import styles from './MenuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href='/blog?cat=style'
        className={`${styles.category} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href='/blog?cat=style'
        className={`${styles.category} ${styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href='/blog?cat=style'
        className={`${styles.category} ${styles.food}`}
      >
        Food
      </Link>
      <Link
        href='/blog?cat=style'
        className={`${styles.category} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href='/blog?cat=style'
        className={`${styles.category} ${styles.culture}`}
      >
        Culture
      </Link>
      <Link
        href='/blog?cat=style'
        className={`${styles.category} ${styles.coding}`}
      >
        Coding
      </Link>
    </div>
  )
}

export default MenuCategories
