'use client'
import { useSession } from "next-auth/react"

export function Avatar() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div>
      {session?.user.name}
    </div>
  )
}