import { getPost } from "@/api/api"
import { PostItem } from "@/components/posts/PostItem"

interface SSRidUrlParams {
  id: string
}

interface SSRidProps {
  params : SSRidUrlParams
}

const SSRid = async ({ params }: SSRidProps) => {
  const { id } = params
  
  const post = await getPost(parseInt(id, 10))

  return (
    <div>
      <h1>SSR [{id}]</h1>
      <PostItem post={post} />
    </div>
  )
}

export default SSRid