import { useState, useEffect } from 'react'
import './projectModal.css'
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ show, closeModal, project }) => {

  const projectModal = (
    <div className={show ? 'projectModal' : 'hidden'}>

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
          <p>{project.process}<Link to={project.collabLinks} target='_blank'><a>{project.collaborators}</a></Link></p>
          <br></br>
          <ul id='skillsList'>
            {project.skills.map((item, i) =>
              <li key={i}>{item}</li>
            )}
          </ul>
        </div>
        <MdClose onClick={closeModal} id='closeButton' />
        <Link to={project.link} target='_blank'>
          <FaGithub id='github' />
        </Link>
      </div>
    </div >
  )

  if (!show) {
    return null;
  }
  return projectModal

}

export default ProjectModal;