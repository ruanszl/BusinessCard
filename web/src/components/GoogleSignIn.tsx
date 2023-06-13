'use client'
import { useEffect, useState } from 'react'

import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '@/firebase/firebase-config'

import { GoogleLogo } from 'phosphor-react'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export function GoogleSignIn() {
  const [access_token, setAcess_token] = useState('')
  const router = useRouter()

  function signIn() {
    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        const provider = new GoogleAuthProvider()

        await signInWithPopup(auth, provider)
          .then(async (result) => {
            const tokenResult: string = await result.user.getIdToken()
            setAcess_token(tokenResult)
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (access_token) {
      tokenAuth(access_token, router)
    }
  }, [access_token, router])

  async function tokenAuth(access_token: string, router: AppRouterInstance) {
    const response = await fetch('http://localhost:3333/auth', {
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      credentials: 'include',
    })
    if (response) {
      console.log('Login Sucessfull')
      router.push('/newCard')
    } else {
      console.log('Login Failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="flex items-center justify-center w-56 h-12 rounded-lg bg-red-700 text-white"
        type="submit"
        onClick={signIn}
      >
        <GoogleLogo size={30} className="mr-3" />
        Login With Google
      </button>
    </div>
  )
}
