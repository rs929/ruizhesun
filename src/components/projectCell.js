import React, { useState, useEffect } from 'react'
import './projectCell.css'

const ProjectCell = ({ image, props }) => {

  return (
    <div className='projectCell'>
      <img src={image}></img>
    </div>
  )
}

export default ProjectCell;