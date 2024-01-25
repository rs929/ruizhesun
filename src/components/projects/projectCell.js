import React, { useState, useEffect } from 'react'
import './projectCell.css'
import ProjectModal from './projectModal'

const ProjectCell = ({ image, props }) => {

  const openModal = () => {
    console.log("OPEN")
  }

  return (
    <div className='projectCell'>
      <img src={image}></img>
    </div>
  )
}

export default ProjectCell;