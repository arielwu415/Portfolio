import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React, { useEffect, useRef } from 'react'
import Post from '../../components/sections/project/Post'
import Layout from '../../components/layouts/Layout'
import styles from '../../styles/Projects.module.scss'

export default function ProjectPage({ projects }) {
    return (
        <Layout>
            <div className={styles.container}>
                {projects.map((project, index) => (
                    <Post post={project} />
                ))}
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

    return {
        props: {
            projects
        }
    }
}