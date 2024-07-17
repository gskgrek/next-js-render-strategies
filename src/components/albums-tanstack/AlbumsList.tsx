'use client'
import { getAlbums } from "@/api/api"

import { Album } from "@/models/Album"

import { AlbumItem } from "./AlbumItem"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"

export const AlbumsList = () => {

  // const albums = await getAlbums()
  const { data: albums } = useSuspenseQuery<Album[]>({
    queryKey: ['albums'],
    queryFn: async () => {
      const data = await getAlbums()
      return data
    },
  })
    
  return (
    <div>
      {albums?.map((album: Album) => <AlbumItem key={album.id} album={album} />)}
    </div>
  )
}