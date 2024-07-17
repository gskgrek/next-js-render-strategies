import { Post } from "@/models/Post"
import { User } from "@/models/User"
import { Comment } from "@/models/Comment"
import { Album } from "@/models/Album"

const sleep = (ms?: number) => new Promise((r) => setTimeout(r, ms || Math.random() * 4000))

export const getUsers = async () => {
  console.log('getUsers')
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  await sleep()
  return data
}

export const getUser = async (id: User['id']) => {
  console.log('getUser', id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  await sleep()
  return data
}

export const getUserSlow = async (id: User['id']) => {
  console.log('getUserSlow', id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  await sleep(5000)
  return data
}

export const getPosts = async () => {
  console.log('getPosts')
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  const data = await response.json()
  await sleep()
  return data
}

export const getPost = async (id: Post['id']) => {
  console.log('getPost', id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  await sleep()
  return data
}

export const getComments = async () => {
  console.log('getComments')
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1', { next: { revalidate: 30 } })
  const data = await response.json()
  await sleep()
  return data
}

export const getComment = async (id: Comment['id']) => {
  console.log('getComment', id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, { next: { revalidate: 30 } })
  const data = await response.json()
  await sleep()
  return data
}

export const getAlbums = async () => {
  console.log('getAlbums')
  const response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
  const data = await response.json()
  await sleep()
  return data
}

export const getAlbum = async (id: Album['id']) => {
  console.log('getAlbum', id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
  const data = await response.json()
  await sleep()
  return data
}
