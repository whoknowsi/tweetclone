import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import InfinityScroll from '../components/InfinityScroll'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter clon</title>
        <meta name="description" content="A Twitter clon using Nextjs 13 and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <InfinityScroll />
        <section>
          a
        </section>
      </main>
    </div>
  )
}
