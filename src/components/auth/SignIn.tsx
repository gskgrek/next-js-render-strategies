import { signIn } from '@/auth'
 
export const SignIn = () => {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn('credentials', { username: formData.get('username'), password: formData.get('password'), redirectTo: '/auth/dashboard' })
      }}
    >
      <div>
        <label>
          Email
          <input name="username" type="email" value="user@test.com" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input name="password" type="password" value="admin123" />
        </label>
      </div>
      <button>Sign In</button>
    </form>
  )
}