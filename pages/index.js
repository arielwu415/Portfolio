import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Layout from '../components/layouts/Layout'
import Landing from '../components/sections/landing/Landing'
import Project from '../components/sections/project/Project'
import About from '../components/sections/about/About'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const scrollTo = (ref) => window.scrollTo({ left: 0, top: ref.current, behavior: 'smooth' })
gsap.registerPlugin(ScrollTrigger)

export default function Home({ projects, languages }) {

  let arrow = useRef(null)

  const top = useRef(null)
  const handleScroll = () => {
    scrollTo(top)
  }

  //https://greensock.com/docs/v3/Plugins/ScrollTrigger
  useEffect(() => {
    gsap.fromTo(arrow, {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: arrow,
        start: "top center",
        scrub: 1,
      },
      opacity: 1,
      ease: "power3.out",
    })
  })

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Landing ref={el => top = el} />
        <About language={languages} />
        <Project posts={projects} />

        <div className={styles.top} onClick={handleScroll} ref={el => arrow = el}>
          <span>▲</span>
        </div>

      </div>
    </Layout>
  )
}

// Reference: https://www.youtube.com/watch?v=MrjeefD8sac&ab_channel=TraversyMedia
export async function getStaticProps() {

  // Get files from the 'markdowns/projects' directory
  const projectFiles = fs.readdirSync(path.join('markdowns/projects'))

  const projects = projectFiles.map(projectFilename => {
    const slug = projectFilename.replace('.md', '')
    // Get frontmatter
    // what's in the .md file
    const markdownWithMeta = fs.readFileSync(
      path.join('markdowns/projects', projectFilename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  // Get files from the 'markdowns/languages' directory
  const languageFiles = fs.readdirSync(path.join('markdowns/languages'))

  const languages = languageFiles.map(languageFilename => {

    const slug = languageFilename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('markdowns/languages', languageFilename),
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
      projects,
      languages: languages.sort((a, b) => b.frontmatter.percentage - a.frontmatter.percentage)
    }
  }
}