import Link from 'next/link'
import styles from './nav.module.css'

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/ssg">SSG</Link>
      <Link href="/isr">ISR</Link>
      <Link href="/ssr">SSR</Link>
      <Link href="/stream">STREAM</Link>
      <Link href="/pre-render">PRE-RENDER</Link>
      <Link href="/auth">AUTH</Link>
    </nav>
  )
}
