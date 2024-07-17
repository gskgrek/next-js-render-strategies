import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

import { AlbumsList } from "@/components/albums-tanstack/AlbumsList"

import { getAlbums } from "@/api/api"
import { Album } from "@/models/Album"
import { Suspense } from "react"

const Stream = () => {
  
  const queryClient = new QueryClient()

  queryClient.prefetchQuery<Album[]>({
    queryKey: ['albums'],
    queryFn: async () => {
      const data = await getAlbums()
      return data
    },
  })
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1>Stream</h1>
        <Suspense fallback={<div>Loading list</div>}>
          <AlbumsList />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}

export default Stream