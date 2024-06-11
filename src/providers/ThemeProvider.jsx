'use client'

import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   // Возвращаем содержимое с начальной темой на сервере для SEO
  //   return <div className='light'>{children}</div>
  // }

  // return <div className={theme}>{children}</div>

  return <div className={theme}>{children}</div>
}

export default ThemeProvider
