import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Layout from '../components/layouts/Layout'
import Landing from '../components/sections/Landing'
import Project from '../components/sections/Project'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Landing/>
        <Project/>

      </div>
    </Layout>
  )
}