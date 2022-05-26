import React from 'react';
import Navbar from '../navbars/Navbar'
import Footer from '../footers/Footer'

export default function Layout({ links, children, scrollToAbout, scrollToProject }) {
    return (
        <>
            <Navbar links={links} scrollToAbout={scrollToAbout} scrollToProject={scrollToProject} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}