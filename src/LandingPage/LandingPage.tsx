import About from '../pages/About'
import Contact from '../pages/Contact'
import Expirience from '../pages/Expirience'
import Projects from '../pages/Projects'
import '../styles/LandingPage.css'
import { useState, useEffect } from 'react'

export default function LandingPage() {

    const [selectedPage, setSelectedPage] = useState<string>("About")

    useEffect(() => {
        
    }, [selectedPage])

    return (
        <>
            <section className='page' id='first-page'>
                <span className='titleText'>Welcome To My Portfolio Webiste!</span>
                <a href='#second-page'><button className='smooth-scroll-button'>View my Work <i className="fa-solid fa-arrow-right"></i></button></a>
            </section>
            <section className='page' id="second-page">
                <div className='navbar'>
                    <button className={selectedPage === "About" ? "navbar-button selected" : "navbar-button"} onClick={() => setSelectedPage("About")}>ABOUT</button>
                    <button className={selectedPage === "Projects" ? "navbar-button selected" : "navbar-button"} onClick={() => setSelectedPage("Projects")}>PROJECTS</button>
                    <button className={selectedPage === "Contact" ? "navbar-button selected" : "navbar-button"} onClick={() => setSelectedPage("Contact")}>CONTACT</button>
                    <button className={selectedPage === "Expirience" ? "navbar-button selected" : "navbar-button"} onClick={() => setSelectedPage("Expirience")}>EXPIRIENCE</button>
                </div>
                <div className='component-container'>
                    {selectedPage === "About" && <About />}
                    {selectedPage === "Contact" && <Contact />}
                    {selectedPage === "Projects" && <Projects />}
                    {selectedPage === "Expirience" && <Expirience />}
                </div>
            </section>
        </>
    )
}