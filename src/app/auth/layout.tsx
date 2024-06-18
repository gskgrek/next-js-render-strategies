import { Header } from '@/components/auth/Header'
import AuthProvider from '@/components/auth/AuthProvider'

interface AuthLayoutProps {
  readonly children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

  return (
    <AuthProvider>
      <Header />
      {children}
    </AuthProvider>
  );
}

export default AuthLayout
