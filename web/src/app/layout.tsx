import '../styles/global.css'
import { ReactNode } from 'react'

import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Business Card',
  description: 'Generated with Next 13 | Tailwind | React ',
}
// {/* blur */}
// <div className="flex mb-10 z-0 rounded-full blur-full h-[288px] w-full bg-purple-700 opacity-30" />
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-950 font-sans text-gray-100`}
      >
        <main className="bg-[url(../assets/bg-stars.svg)]">{children}</main>
      </body>
    </html>
  )
}
