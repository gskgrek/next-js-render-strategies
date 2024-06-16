import { auth } from '@/auth'
import { SignOut } from '@/components/auth/SignOut'

interface AuthLayoutProps {
  readonly children: React.ReactNode
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const session = await auth()

  return (
    <div>
      <header>
        {session?.user ? (
          <>
            {session?.user.name}
            <SignOut />
          </>
        ) : 'Login below'}
      </header>
      {children}
    </div>
  );
}

export default AuthLayout
