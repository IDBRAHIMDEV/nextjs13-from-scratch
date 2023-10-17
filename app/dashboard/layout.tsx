import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard for my site',
  description: 'Welciome to the dashboad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <div className="container m-10">

            <h1>Welcome to the back office</h1>

          {children}
        </div>
        </body>
    </html>
  )
}
