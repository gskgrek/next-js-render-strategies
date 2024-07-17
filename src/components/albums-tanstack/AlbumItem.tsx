'use client'
import { getAlbum } from "@/api/api"
import { Album } from "@/models/Album"
import { useSuspenseQuery } from "@tanstack/react-query"
import Link from "next/link"

interface AlbumProps {
  id?: number
  album?: Album
}

export const AlbumItem = ({ album, id }: AlbumProps) => {
  //const albumData = album || (id ? await getAlbum(id) : {})
  const { data } = useSuspenseQuery<Album>({
    queryKey: [`album-${id}`],
    queryFn: async () => {
      const data =id ? await getAlbum(id) : {}
      return data
    },
  })

  const albumData = album || data

  return (
    <div>
      {albumData.id}: {albumData.title}
      <div>
        <Link href={`/stream/${albumData.id}`}>view</Link>
      </div>
    </div>
  )
}