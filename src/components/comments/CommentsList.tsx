import { getComments } from "@/api/api"
import { CommentItem } from "./CommentItem"
import { Comment } from "@/models/Comment"

export const CommentsList = async () => {
  
  const comments = await getComments()
  
  return (
    <div>
      {comments?.map((comment: Comment) => <CommentItem key={comment.id} comment={comment} />)}
    </div>
  )
}