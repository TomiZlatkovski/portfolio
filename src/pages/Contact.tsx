import { useState } from "react"
import '../styles/Contact.css'

interface iContactForm {
    name: string
    email: string
    message: string
}

export default function Contact() {

    const githubLink = "https://github.com/TomiZlatkovski"
    const linkedinLink = "https://www.linkedin.com/in/tomi-zlatkovski"
    const email = "tomizlatkovski6911@gmail.com"

    const [contactForm, setContactForm] = useState<iContactForm>({
        name: "",
        email: "",
        message: ""
    })

    return (
        <div className="component">
            <div className="component-content slide-animation" id="contact">
                <div className="contact">
                    <form onSubmit={() => console.log(contactForm)}>
                        <h1 className="contact-title-text">Contact Me</h1>
                        <div className="contact-input-wrapper">
                            <input className="contact-identifier" type="text" name="name" required placeholder="Name" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.currentTarget.value })} />
                            <input className="contact-identifier" type="email" name="email" required placeholder="Email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.currentTarget.value })} />
                        </div>
                        <textarea className="contact-message" name="message" required placeholder="Message" value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message:e.currentTarget.value })}/>
                        <button className="contact-button" type="submit">Send</button>
                    </form>
                    <div className="platforms">
                        <img className="platform-icon" src="/images/icons/github.svg" onClick={() => window.open(githubLink)} id="github-icon" />
                        <img className="platform-icon" src="/images/icons/linkedin.svg" onClick={() => window.open(linkedinLink)} id="linkedin-icon" />
                        <img className="platform-icon" src="/images/icons/mail.svg" onClick={() => window.location.href=`mailto:${email}`} id="email-icon" title={email} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function submitData(contactForm: iContactForm, setContactForm: Function) {
    // Submit form
}