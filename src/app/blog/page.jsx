import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import styles from './BlogPage.module.css'

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  const category = searchParams.cat

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={category} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
