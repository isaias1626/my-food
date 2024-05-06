import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from './_context/cart'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MyFood',
  description:
    'Os melhores restaurantes'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/my-food.svg" />
      </head>
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
