import { useEffect, useRef } from 'react'
import Head from 'next/head'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '../styles/Home.module.scss'

import Layout from '../components/layouts/Layout'
import Landing from '../components/sections/landing/Landing'
import Project from '../components/sections/project/Project'
import About from '../components/sections/about/About'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const scrollTo = (ref) => window.scrollTo({ left: 0, top: ref, behavior: 'smooth' })
gsap.registerPlugin(ScrollTrigger)

export default function Home({ links, projects, languages }) {

  // Scroll to top button
  let arrow = useRef(null)

  // Scroll to about
  let aboutSection = useRef(null)
  const scrollToAbout = () => {
    let offset = aboutSection.getBoundingClientRect().top
    scrollTo(offset)
  }

  // Scroll to project
  let projectSection = useRef(null)
  const scrollToProject = () => {
    let offset = projectSection.getBoundingClientRect().top
    scrollTo(offset)
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
    <Layout links={links} scrollToAbout={scrollToAbout} scrollToProject={scrollToProject}>
      <div className={styles.container}>
        <Head>
          <title>Ariel Wu</title>
          <meta name="description" content="Ariel Wu is a CS student at Cal Poly Pomona who aims to become a full stack engineer.
          This is her portfolio website showing all her educations, skills, technologies, and projects." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Landing />
        <div ref={el => aboutSection = el}></div>
        <About language={languages} />
        <div ref={el => projectSection = el}></div>
        <Project posts={projects} />

        <div className={styles.top} onClick={() => scrollTo(0)} ref={el => arrow = el}>
          <span>^</span>
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

  // Get files from the 'markdowns/links' directory
  const linkFiles = fs.readdirSync(path.join('markdowns/links'))

  const links = linkFiles.map(linksName => {
    const slug = linksName.replace('.md', '')
    // Get frontmatter
    // what's in the .md file
    const markdownWithMeta = fs.readFileSync(
      path.join('markdowns/links', linksName),
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
      links,
      projects,
      languages: languages.sort((a, b) => b.frontmatter.percentage - a.frontmatter.percentage)
    }
  }
}