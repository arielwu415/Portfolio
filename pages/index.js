import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Layout from '../components/layouts/Layout'
import Landing from '../components/sections/Landing'
import Project from '../components/sections/Project'

export default function Home({ projects }) {

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Landing />
        <Project posts={projects}/>
        

      </div>
    </Layout>
  )
}

// Reference: https://www.youtube.com/watch?v=MrjeefD8sac&ab_channel=TraversyMedia
export async function getStaticProps() {
  // Get files from the 'markdowns/projects' directory
  const files = fs.readdirSync(path.join('markdowns/projects'))

  // Get slug and frontmatter from projects
  const projects = files.map(filename => {
    const slug = filename.replace('.md', '')

    // Get frontmatter
    // what's in the .md file
    const markdownWithMeta = fs.readFileSync(
      path.join('markdowns/projects', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      projects
    }
  }
}