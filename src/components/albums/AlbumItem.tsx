import { getAlbum } from "@/api/api"
import { Album } from "@/models/Album"
import Link from "next/link"

interface AlbumProps {
  id?: number
  album?: Album
}

export const AlbumItem = async ({ album, id }: AlbumProps) => {
  const albumData = album || (id ? await getAlbum(id) : {})

  return (
    <div>
      {albumData.id}: {albumData.title}
      <div>
        <Link href={`/stream/${albumData.id}`}>view</Link>
      </div>
    </div>
  )
}