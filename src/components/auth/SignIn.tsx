'use client'
import { signIn } from "next-auth/react"
import { useState } from "react"
 
export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    await signIn('credentials', { username: 'user@test.com', password: 'admin123', callbackUrl: '/auth/dashboard' })
  }

  return (
    <div>
      {isLoading ? 'Loading' : <button onClick={handleClick}>Sign In</button>}
    </div>
  )
}