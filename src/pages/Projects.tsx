import projects from '../../projects.json'
import '../styles/Projects.css'
import { useState } from 'react'
interface iCategory {
    name: string
    projects: iProject[]
}

interface iProject {
    name: string
    description: string
    status: string
    position: string
    images: string[]
}

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState<iProject | null>(null)
    const [key, setKey] = useState<number>(1)

    return (
        <div className="component">
            <div className='component-content slide-animation' id='projects' key={key}>
                {!selectedProject ? projects.map((category: iCategory) => (
                    <section id={category.name} className='project-page'>
                        <h1 className='category-name'>{category.name}</h1>
                        <div className='projects'>
                            {category.projects.map((project: iProject) => (
                                <div className='project' onClick={() => setSelectedProject(project)}>
                                    <h1>{project.name}</h1>
                                </div>
                            ))}
                        </div>
                    </section>
                )) : (
                    <div className='project-container'>
                        <div className='project-details project-slide-in-animation'>
                            <button className='back-button' onClick={() => {setSelectedProject(null); setKey(key*(-1))}}><i className="fa-solid fa-arrow-left"/></button>
                            <h1 className='project-title'>{selectedProject.name}</h1>
                            <div className='project-position-status-wrapper'>
                                <h1 className='project-position'>{selectedProject.position}</h1>
                                <h1 className='project-status'>{selectedProject.status}</h1>
                            </div>
                            <p className='project-description'>{selectedProject.description}</p>
                        </div>
                        <div className='project-image-container'>
                            {selectedProject.images.map(image => (
                                <img className='project-image project-image-slide-in-animation' src={image} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}