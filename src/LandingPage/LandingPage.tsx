import '../styles/LandingPage.css'

export default function LandingPage() {
    return (
        <div className="page">
            <span className='titleText'>
                <i className="fa-solid fa-hammer fa-2xl" style={{ color: "#c9701d;" }}></i>
                Website Under Construction
                <i className="fa-solid fa-hammer fa-flip-horizontal fa-2xl" style={{color: "#c9701d;"}}></i>
            </span>
            <img className="image" src="images/ManPushingRock.jpg" />
        </div>
    )
}