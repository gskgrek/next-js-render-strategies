import { SignOut } from '@/components/auth/SignOut'
import { Avatar } from './Avatar'

export const Header = async () => {
  return (
    <header>
      <Avatar />
      <SignOut />
    </header>
  )
}