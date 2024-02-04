import React, { useState } from 'react'
import './experienceCell.css'
import { FaLink } from "react-icons/fa";

const ExperienceCell = ({ title, org, text, date, image }) => {
  return (
    <div className='expCell'>
      <img src={image}></img>
      <div className='expContent'>
        <p id='title'>{title}</p>
        <p id='org'>{org}</p>
        <p id='date'>{date}</p>
        <br></br>
        <p id='body'>{text}</p>
      </div>
      <FaLink id='link'></FaLink>
    </div>
  )
}

export default ExperienceCell;