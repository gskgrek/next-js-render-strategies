import { User } from "@/models/User"
import Link from "next/link"

interface UserProps {
  user: User
}

export const UserItem = ({ user }: UserProps) => {
  return (
    <div>
      {user.id}: {user.name}
      <div>
        <Link href={`/ssg/${user.id}`}>view</Link>
      </div>
    </div>
  )
}