import React, { useState, useEffect } from 'react'
import './skillsSection.css'
import SkillCell from './skillCell';
import Web from "../assets/webdev.svg"
import Mobile from "../assets/mobiledev.svg"
import ML from "../assets/ml.svg"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsAnimation = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
}

const SkillsSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);


  return (
    <motion.section variants={skillsAnimation}
      initial="hidden"
      whileInView="visible" id='skills'>
      <SkillCell title="iOS Development" text="Proficient in designing, developing, and shipping Full-Stack iOS mobile applications using Swift and UIKit/SwiftUI Frameworks" image={Mobile}></SkillCell>
      <SkillCell title="Web Development" text="Experienced in building dynamic Full-Stack web applications using HTML, CSS, JavaScript, and frameworks like React.js and Node.js" image={Web}></SkillCell>
      <SkillCell title="Machine Learning" text="Experience with applying principles of data science and machine learning to create models using Python and R, and technologies like NumPy and PyTorch" image={ML}></SkillCell>
    </motion.section >
  )
}

export default SkillsSection;