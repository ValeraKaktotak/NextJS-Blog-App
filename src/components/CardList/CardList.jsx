import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import styles from './CardList.module.css'

const getPosts = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`
  )
  if (!res.ok) {
    throw new Error('Failed')
  }
  return res.json()
}

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getPosts(page, cat)

  const POST_PER_PAGE = 2
  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList
