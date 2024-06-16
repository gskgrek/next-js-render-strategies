import styles from 'layout.module.css'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        USER NAME
      </header>
      {children}
    </div>
  );
}
