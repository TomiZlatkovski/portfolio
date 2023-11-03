import { render } from 'react-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Expirience from '../pages/Expirience'
import Projects from '../pages/Projects'
import '../styles/LandingPage.css'
import { useState, useEffect } from 'react'

interface iPage {
    name: string
    page: React.ComponentType
}

const pages: iPage[] = [{
    name: "About",
    page: About
}, {
    name: "Projects",
    page: Projects
}, {
    name: "Contact",
    page: Contact
}, {
    name: "Expirience",
    page: Expirience
}]

export default function LandingPage() {

    const [selectedPage, setSelectedPage] = useState<iPage | null>(null)

    return (
        <>
            <section className='page' id='first-page'>
                <span className='titleText'>Welcome To My Portfolio Webiste!</span>
                <a href='#second-page'><button className='smooth-scroll-button'>View my Work <i className="fa-solid fa-arrow-right"></i></button></a>
            </section>
            <section className='page' id="second-page">
                <div className="navbar">
                    {pages.map((page: iPage) => (
                        <button className={`navbar-button ${selectedPage && page.name === selectedPage.name ? "selected" : ""}`} onClick={() => setSelectedPage(page)}>{page.name.toUpperCase()}</button>
                    ))}
                </div>
                {selectedPage &&
                <div className='component-container'>
                    {selectedPage && <selectedPage.page />}
                </div>
                }
            </section>
        </>
    )
}