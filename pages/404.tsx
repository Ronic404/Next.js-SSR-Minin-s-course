import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import styles from '../styles/error.module.scss'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={styles.error}>Error Page</h1>
      <p>Please <Link href={'/'}><a>go back</a></Link> to safety</p>
    </MainLayout>
  )
}