import { getUsers } from "@/api/api"
import { User } from "@/models/User"
import { UserItem } from "./UserItem"

export const UsersList = async () => {
  const users = await getUsers()
  
  return (
    <div>
      {users?.map((user: User) => <UserItem key={user.id} user={user} />)}
    </div>
  )
}