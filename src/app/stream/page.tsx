import { AlbumsList } from "@/components/albums/AlbumsList"
import { Suspense } from "react"

const Stream = () => {
  return (
    <div>
      <h1>Stream</h1>
      <Suspense fallback={<div>Loading list</div>}>
        <AlbumsList />
      </Suspense>
    </div>
  )
}

export default Stream