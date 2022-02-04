import React from 'react';
import Navbar from '../navbars/Navbar'
import Footer from '../footers/Footer'

export default function Layout({children})
{
    return(
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}