'use client'
import { useSession } from "next-auth/react"

export function Avatar() {
  const { data: session } = useSession()

  return (
    <div>
      {session?.user.name}
    </div>
  )
}