"use client"; // This is a client component 👈🏽
import React from 'react' 
import Link from 'next/link';
import Header from '../components/Header'
import Footer from '../components/Footer';

 
function Contact() {
    return (
        <>
            <Header type="Single"/> 

            <div>Contact <Link href="/"> Home</Link> </div>

            <Footer />

        </>
    )
}

export default Contact