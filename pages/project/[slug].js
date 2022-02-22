import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
// import styles from '../../styles/Home.module.scss'
import Layout from '../../components/layouts/Layout'

export default function ProjectPage({
    frontmatter: { title, semester, cover_image },
    slug,
    content
}) {

    return (
        <Layout>
            <div className={styles.container}>
                <Link href='/'>
                    <a className={styles.back_button}>Go Back</a>
                </Link>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <span>{semester}</span>
                    <img src={cover_image} alt='' />
                    <div className={styles.post_body}>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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

    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}