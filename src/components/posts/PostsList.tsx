import { getPosts } from "@/api/api"
import { Post } from "@/models/Post"
import { PostItem } from "./PostItem"

export const PostsList = async () => {
  
  const posts = await getPosts()
  
  return (
    <div>
      {posts?.map((post: Post) => <PostItem key={post.id} post={post} />)}
    </div>
  )
}