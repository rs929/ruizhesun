import React, { useState, useEffect } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import './projects.css'
import ProjectCell from './projectCell.js'
import ProjectModal from './projectModal.js'
import Scooped from '../../assets/scooped.png'

const ProjectsSection = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const updateModalVisible = () => {
    console.log("CLICK")
    if (modalVisible) {
      setModalVisible(false)
    } else {
      setModalVisible(true)
    }
  }

  const projects = [
    {
      title: "Scooped",
      image: Scooped,
      date: "September 2022 - May 2023",
      description: "Want to explore cool places within Ithaca and beyond? Scooped’s proprietary search algorithm connects students that are traveling to similar locations and optimizes the traveling process. To put it simply: Scooped allows you to reach out to a driver that’s traveling to a similar location as you to get where you’re going faster. Cornell students want safe & affordable travel options to and from places within driving distance of Ithaca, and Scooped makes this dream a reality!",
      process: "I worked on Scooped for 3 semesters while on AppDev and worked to publish the app on the App Store. My contributions include implementing location integration and phone authentication with Google Places and Firebase, as well as the prototyping, and finilizing many of the user and ride flows",
      skills: ["Swift", "UIKit", "Google Places", "Firebase"]
    }
  ]

  return (
    <section className='projectSection'>
      <h1>Projects</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ProjectModal show={modalVisible} closeModal={updateModalVisible} project={projects[0]} />
      <div id='projects'>
        <div className='project' onClick={updateModalVisible}>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project'>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project'>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project'>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project'>
          <ProjectCell image={Scooped} />
        </div>
        <div className='project'>
          <ProjectCell image={Scooped} />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;