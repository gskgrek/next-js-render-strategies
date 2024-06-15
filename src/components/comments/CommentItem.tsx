import { Comment } from "@/models/Comment"
import Link from "next/link"

interface CommentProps {
  comment: Comment
}

export const CommentItem = ({ comment }: CommentProps) => {
  return (
    <div>
      {comment.id}: {comment.name}
      <div>
        <Link href={`/isr/${comment.id}`}>view</Link>
      </div>
    </div>
  )
}