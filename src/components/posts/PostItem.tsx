import { Post } from "@/models/Post"
import Link from "next/link"

interface PostProps {
  post: Post
}

export const PostItem = ({ post }: PostProps) => {
  return (
    <div>
      {post.id}: {post.title}
      <div>
        <Link href={`/ssr/${post.id}`}>view</Link>
      </div>
    </div>
  )
}