import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import styles from './CardList.module.css'

const getPosts = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

const CardList = async () => {
  const data = await getPosts()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}

export default CardList
