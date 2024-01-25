import React, { useState, useEffect } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import './projects.css'
import ProjectCell from './projectCell.js'
import ProjectModal from './projectModal.js'
import Scooped from '../../assets/scooped.png'

const ProjectsSection = () => {
  const [visible, setVisible] = useState(false);
  const modal = document.getElementById('projectModal');

  const presentProject = () => {
    if (visible) {
      setVisible(false);
      modal.close();
      console.log("Modal Closed");
    }
    else {
      setVisible(true);
      modal.showModal();
      console.log("Modal Shown");
    }

  }

  return (
    <section className='projectSection'>
      <dialog id='projectModal'>
        <div id='closeModal' onClick={presentProject}>
          <MdClose />
        </div>
        <ProjectModal onClick={presentProject} />
        <p>AHHHHHHHHHHHHHHHHHHHH</p>
      </dialog>

      <h1>Projects</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id='projects'>
        <div className='project' onClick={presentProject}>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project' onClick={presentProject}>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project' onClick={presentProject}>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project' onClick={presentProject}>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project' onClick={presentProject}>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project' onClick={presentProject}>
          <ProjectCell image={Scooped} />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;