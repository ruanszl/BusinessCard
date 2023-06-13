'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'

export function Header() {
  return (
    <>
      <h1 className="text-white">
        <Image src={logo} alt="" height={100} className="px-4 py-2" />
      </h1>
    </>
  )
}
