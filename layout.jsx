// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { IBM_Plex_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const fontHeading = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

输出 default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
