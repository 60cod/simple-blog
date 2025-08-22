import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from './components/ScrollToTop'
import AnimatedBackground from './components/AnimatedBackground'

export const metadata: Metadata = {
  title: 'TechBlog - Latest in Technology',
  description: 'Stay updated with the latest technology trends and insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AnimatedBackground />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}