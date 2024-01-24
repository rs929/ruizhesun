import React, { useState } from 'react'
import './skillsSection.css'
import SkillCell from './skillCell';
import Web from "../assets/webdev.svg"
import Mobile from "../assets/mobiledev.svg"
import ML from "../assets/ml.svg"

const SkillsSection = () => {
  return (
    <section id='skills'>
      <SkillCell title="iOS Development" text="Proficient in designing, developing, and shipping Full-Stack iOS mobile applications using Swift and UIKit/SwiftUI Frameworks" image={Mobile}></SkillCell>
      <SkillCell title="Web Development" text="Experienced in building dynamic Full-Stack web applications using HTML, CSS, JavaScript, and frameworks like React.js and Node.js" image={Web}></SkillCell>
      <SkillCell title="Data Science/ Machine Learning" text="Experience with applying principles of data science and machine learning to create models using Python and R, and technologies like NumPy and PyTorch" image={ML}></SkillCell>
    </section >
  )
}

export default SkillsSection;