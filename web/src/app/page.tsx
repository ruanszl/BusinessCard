import { GoogleSignIn } from '@/components/GoogleSignIn'
import { cookies } from 'next/headers'
import NewCard from './newCard/page'

export default function Home() {
  const isAuthenticate = cookies().has('session')
  return (
    <div className="">
      <main>{isAuthenticate ? <NewCard /> : <GoogleSignIn />}</main>
    </div>
  )
}
