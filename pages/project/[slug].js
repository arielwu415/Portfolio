import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

import styles from '../../styles/ProjectPage.module.scss'
import Layout from '../../components/layouts/Layout'
import { Button } from '../../components/assets/Button'

export default function ProjectPage({
    links,
    frontmatter: { title, semester, cover_image, link, note },
    slug,
    content
}) {
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
                <title>Ariel Wu | Projects | {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>

                <div className={styles.content}>
                    <img className={styles.cover_img} src={cover_image} alt='' />

                    <div className={styles.title}>
                        <h1>{title}</h1>
                        <span className={styles.secondary_text}>{semester}</span>
                    </div>

                    <div className={styles.post_body}>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                        <div className={styles.project_link}>
                            <span>Project Link: </span>
                            <a href={link}>{link}</a>
                        </div>
                        <div className={styles.note}>
                            <span className={styles.secondary_text}>{note}</span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Button text="◀ Go Back to All Projects" background_color="var(--major-blue)" color="var(--bright-gray)" />
                    </div>
                </div>
            </div>

        </Layout>

    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('markdowns/projects'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('markdowns/projects',
        slug + '.md'), 'utf-8')

    const { data: frontmatter, content } = matter(markdownWithMeta)
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
            frontmatter,
            slug,
            content
        }
    }
}