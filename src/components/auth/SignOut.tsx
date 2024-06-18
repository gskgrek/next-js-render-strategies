'use client'
import { signOut } from "next-auth/react"

export function SignOut() {
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: '/auth' })}>Sign Out</button>
    </div>
  )
}