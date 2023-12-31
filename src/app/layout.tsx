import './style/globals.scss'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

const urbaniUrbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Constitución Argentina',
  description: 'Constitución de la República Argentina',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />

      <link
        rel="shortcut icon"
        href="/favicon/android-chrome-192x192.png"
        sizes="192x192"
      />
      <link
        rel="shortcut icon"
        href="/favicon/android-chrome-512x512.png"
        sizes="512x512"
      />

      <link
        rel="apple-touch-icon"
        href="/favicon/apple-touch-icon.png"
        sizes="180x180"
      />
      <body className={urbaniUrbanist.className}>{children}</body>
    </html>
  )
}
