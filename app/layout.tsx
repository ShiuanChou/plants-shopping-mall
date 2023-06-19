"use client"

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import './_globals.scss';
import Providers from '@/components/Providers';

export const metadata = {
  title: '日日靜好',
  description: '找到屬於你的室內植物',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <head>
        <title>日日靜好</title>
      </head>
      <body suppressHydrationWarning={true} >
        <Providers>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
