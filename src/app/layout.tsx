import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Jnjtnutty',
  description: 'pattaraporn.dev',
}

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}