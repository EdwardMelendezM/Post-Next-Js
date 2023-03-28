import Navigator from '@/components/Header'
import './globals.css'
import { Space_Grotesk as spaceGrotesk } from '@next/font/google'

const font = spaceGrotesk({
  weight: ['400', '700'],
  subsets: ['latin']
})
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>My first proyect</title>
      </head>
      <body className={font.className}>
        <Navigator />
        {children}
      </body>
    </html>
  )
}
