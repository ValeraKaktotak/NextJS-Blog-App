'use client'

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

// const getThemeFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     const theme = localStorage.getItem('theme')
//     return theme || 'light'
//   }
// }

export const ThemeContextProvider = ({ children, themeFromCookies }) => {
  //const localStorageTheme = getThemeFromLocalStorage()
  //const [theme, setTheme] = useState(localStorageTheme)

  const myThemeFromCookies = themeFromCookies ? themeFromCookies.value : 'light'
  const [theme, setTheme] = useState(myThemeFromCookies)

  const toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    //localStorage.setItem('theme', theme)
    document.cookie = `theme = ${theme}`
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
