import { auth } from '@/auth'
 
export default auth(req => {
  if (!req.auth) {
    const newUrl = new URL("/auth", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: [
    '/auth/dashboard'
  ]
}
