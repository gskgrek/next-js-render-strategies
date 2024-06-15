import { getUser, getUsers } from "@/api/api";
import { UserItem } from "@/components/users/UserItem";
import { User } from "@/models/User";

interface SSGidUrlParams {
  id: string
}

interface SSGidProps {
  params : SSGidUrlParams
}

const SSGid = async ({ params }: SSGidProps) => {
  const { id } = params

  const user = await getUser(parseInt(id, 10))

  return (
    <div>
      <h1>SSG [{id}]</h1>
      <UserItem user={user} />
    </div>
  );
}

export default SSGid

export const generateStaticParams = async () => {
  const users = await getUsers()

  return users.map((user: User) => ({
    id: user.id.toString(10)
  }))
}

export const dynamicParams = false
