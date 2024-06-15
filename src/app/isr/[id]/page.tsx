import { getComment, getComments } from "@/api/api"
import { CommentItem } from "@/components/comments/CommentItem"
import { Comment } from "@/models/Comment"

interface ISRidUrlParams {
  id: string
}

interface ISRidProps {
  params : ISRidUrlParams
}

const ISRid = async ({ params }: ISRidProps) => {
  const { id } = params
  console.log('pre render', id)
  const comment = await getComment(parseInt(id, 10))

  return (
    <div>
      <h1>ISR [{id}]</h1>
      <CommentItem comment={comment} />
    </div>
  )
}

export default ISRid

export const generateStaticParams = async () => {
  const comments = await getComments()

  return comments.map((comment: Comment) => ({
    id: comment.id.toString(10)
  }))
}

export const dynamicParams = false
