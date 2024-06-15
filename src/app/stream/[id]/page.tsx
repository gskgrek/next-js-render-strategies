import { AlbumItem } from "@/components/albums/AlbumItem"
import { Suspense } from "react"

interface StreamIdUrlParams {
  id: string
}

interface StreamIdProps {
  params : StreamIdUrlParams
}

const StreamId = async ({ params }: StreamIdProps) => {
  const { id } = params
  
  return (
    <div>
      <h1>Stream [{id}]</h1>
      <Suspense fallback={<div>Loading item {id}</div>}>
        <AlbumItem id={parseInt(id, 10)} />
      </Suspense>
    </div>
  )
}

export default StreamId