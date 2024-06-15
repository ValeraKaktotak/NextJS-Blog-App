import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { ThemeContextProvider } from '@/context/ThemeContext'
import AuthProvider from '@/providers/AuthProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'My first next app!!!'
}

export default function RootLayout({ children }) {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider themeFromCookies={theme}>
            <ThemeProvider>
              <div className='container'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
