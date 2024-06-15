import { Post } from "@/models/Post"
import { User } from "@/models/User"

const sleep = (ms?: number) => new Promise((r) => setTimeout(r, ms || Math.random() * 4000))

export const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  await sleep()
  return data
}

export const getUser = async (id: User['id']) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  await sleep()
  return data
}

export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  const data = await response.json()
  await sleep()
  return data
}

export const getPost = async (id: Post['id']) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  await sleep()
  return data
}

export const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1', { next: { revalidate: 30 } })
  const data = await response.json()
  await sleep()
  return data
}

export const getComment = async (id: Post['id']) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, { next: { revalidate: 30 } })
  const data = await response.json()
  await sleep()
  return data
}
