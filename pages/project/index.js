import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Post from '../../components/sections/project/Post'
import Layout from '../../components/layouts/Layout'
import styles from '../../styles/Projects.module.scss'

export default function ProjectPage({ links, projects }) {

    const router = useRouter()

    const handleClickAbout = () => {
        router.push('/')
    }
    const handleClickProject = () => {
        router.push('/project')
    }

    return (
        <Layout links={links} scrollToAbout={handleClickAbout} scrollToProject={handleClickProject}>
            <Head>
                <title>Ariel Wu | Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h1>All Projects</h1>
                <div className={styles.project_container}>
                    {projects.map((project, index) => (
                        <Post post={project} />
                    ))}
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
            projects
        }
    }
}