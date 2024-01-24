import React, { useState, useEffect } from 'react'
import './projects.css'
import ProjectCell from './projectCell.js'
import Scooped from '../assets/scooped.png'

const ProjectsSection = () => {

  return (
    <section className='projectSection'>
      <h1>Projects</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id='projects'>
        <ProjectCell className='project' image={Scooped} />
        <ProjectCell className='project' image={Scooped} />
        <ProjectCell className='project' image={Scooped} />
        <ProjectCell className='project' image={Scooped} />
        <ProjectCell className='project' image={Scooped} />
        <ProjectCell className='project' image={Scooped} />
      </div>
    </section>
  )
}

export default ProjectsSection;