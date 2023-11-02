import About from '../pages/About'
import Contact from '../pages/Contact'
import Expirience from '../pages/Expirience'
import Projects from '../pages/Projects'
import '../styles/LandingPage.css'
import { useState, useEffect } from 'react'

export default function LandingPage() {

    const [selectedPage, setSelectedPage] = useState<string | null>(null)

    useEffect(() => {
        
    }, [selectedPage])

    return (
        <>
            <section className='page' id='first-page'>
                <span className='titleText'>Welcome To My Portfolio Webiste!</span>
                <a href='#second-page'><button className='smooth-scroll-button'>View my Work <i className="fa-solid fa-arrow-right"></i></button></a>
            </section>
            <section className='page' id="second-page">
                <div className="navbar">
                    <button className={`navbar-button ${selectedPage === "About" ? "selected" : ""}`} onClick={() => setSelectedPage("About")}>ABOUT</button>
                    <button className={`navbar-button ${selectedPage === "Projects" ? "selected" : ""}`} onClick={() => setSelectedPage("Projects")}>PROJECTS</button>
                    <button className={`navbar-button ${selectedPage === "Contact" ? "selected" : ""}`} onClick={() => setSelectedPage("Contact")}>CONTACT</button>
                    <button className={`navbar-button ${selectedPage === "Expirience" ? "selected" : ""}`} onClick={() => setSelectedPage("Expirience")}>EXPIRIENCE</button>
                </div>
                {selectedPage &&
                <div className='component-container'>
                    {selectedPage === "About" && <About />}
                    {selectedPage === "Contact" && <Contact />}
                    {selectedPage === "Projects" && <Projects />}
                    {selectedPage === "Expirience" && <Expirience />}
                </div>
                }
            </section>
        </>
    )
}