import React from 'react';
import Navbar from '../navbars/Navbar'
import Footer from '../footers/Footer'

export default function Layout({ children, scrollToAbout, scrollToProject }) {
    return (
        <>
            <Navbar scrollToAbout={scrollToAbout} scrollToProject={scrollToProject} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}