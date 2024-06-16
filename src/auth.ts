import NextAuth, { type DefaultSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from './models/User'

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    /**
     * By default, TypeScript merges new interface properties and overwrites existing ones.
     * In this case, the default session user properties will be overwritten,
     * with the new ones defined above. To keep the default session user properties,
     * you need to add them back into the newly declared interface.
     */
    user: User & DefaultSession["user"]
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      
      /* Workaround for TypeScript problems: https://github.com/nextauthjs/next-auth/issues/2701#issuecomment-1795065405 */
      // @ts-ignore
      authorize: async (credentials, request) => {
        if (credentials.username === 'user@test.com' && credentials.password === 'admin123') {
          const user: User = {
            id: 1,
            name: 'First User',
          }

          return user
        } else {
          throw new Error('Invalid credentials')
        }
      }
    }),
  ],
})
