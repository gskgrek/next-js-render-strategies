import { getAlbum } from "@/api/api"
import { AlbumItem } from "@/components/albums-tanstack/AlbumItem"
import { Album } from "@/models/Album"
import { QueryClient } from "@tanstack/react-query"
import { Suspense } from "react"

interface StreamIdUrlParams {
  id: string
}

interface StreamIdProps {
  params : StreamIdUrlParams
}

const StreamId = ({ params }: StreamIdProps) => {
  const { id } = params
  
  const queryClient = new QueryClient()

  queryClient.prefetchQuery<Album>({
    queryKey: [`album-${id}`],
    queryFn: async () => {
      const data = await getAlbum(parseInt(id))
      return data
    },
  })
  
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