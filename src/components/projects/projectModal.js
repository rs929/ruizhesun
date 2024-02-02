import { useState, useEffect } from 'react'
import './projectModal.css'

const ProjectModal = ({ show, closeModal, project }) => {

  const projectModal = (
    <div className={show ? 'projectModal' : 'hidden'} onClick={closeModal}>
      <div className='modalContainer'>
        <img src={project.image}></img>
        <div className='modalTextContent'>
          <h4 id='title'>{project.title}</h4>
          <h4 id='date'>{project.date}</h4>
          <br></br>
          <h5 id='subtitle'>Description</h5>
          <p>{project.description}</p>
          <br></br>
          <h5 id='subtitle'>Process</h5>
          <p>{project.process}</p>
          <br></br>
          <ul id='skillsList'>
            {project.skills.map((item, i) =>
              <li key={i}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </div >
  )

  if (!show) {
    return null;
  }
  return projectModal

}

export default ProjectModal;