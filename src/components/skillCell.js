import React, { useState } from 'react'
import './skillCell.css'

const SkillCell = ({ title, text, image }) => {
  return (
    <div id='cell'>
      <img src={image}></img>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default SkillCell;