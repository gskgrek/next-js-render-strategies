import { getAlbums } from "@/api/api"
import { Album } from "@/models/Album"
import { AlbumItem } from "./AlbumItem"

export const AlbumsList = async () => {
  
  const albums = await getAlbums()
  
  return (
    <div>
      {albums?.map((album: Album) => <AlbumItem key={album.id} album={album} />)}
    </div>
  )
}