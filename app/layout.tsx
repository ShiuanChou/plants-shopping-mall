import Navbar from '@/components/layouts/Navbar';
import './_globals.scss';
import Footer from '@/components/layouts/Footer';

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
        <link rel='icon' href='/public/favicon.ico' />
      </head>
      <body suppressHydrationWarning={true} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
