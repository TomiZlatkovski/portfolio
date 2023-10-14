import '../styles/LandingPage.css'

export default function LandingPage() {
    return (
        <>
            <section className='page' id='first-page'>
                <span className='titleText'>Welcome To My Portfolio Webiste!</span>
                <a href='#second-page'><button className='smooth-scroll-button'>View my Work <i className="fa-solid fa-arrow-right"></i></button></a>
            </section>
            <section className='page' id="second-page">
                <h1>Second Section of Page</h1>
            </section>
        </>
    )
}