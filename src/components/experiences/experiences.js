import React, { useState, useEffect } from 'react'
import './experiences.css'
import ExperienceCell from './experienceCell';
import AppDev from '../../assets/AppDev.png'
import LLounge from '../../assets/llounge.svg'
import Cornell from "../../assets/cornell.png"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experienceAnimation = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
}

const ExperienceSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section id='experiences'>
      <h1>Experiences</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <motion.div variants={experienceAnimation}
        initial="hidden"
        whileInView="visible" id='expCells'>
        <ExperienceCell title="Teaching Assistant - INFO 2950" org="Cornell University" date="Ithaca, NY | Dec 2023 - Present" text="Worked with professor and other TAs to grade, teach, and assist students with data science in R programming language. Led a discussion section once a week to help students reinforce course concepts and facilitate code debugging" image={Cornell} />
        <ExperienceCell title="Course Instructor - CS 1998" org="Cornell AppDev" date="Ithaca, NY | Apr 2023 - Present" text="Introduction to iOS Development at Cornell University, hosting lectures twice a week for a class of 100+ students. Created and taught course material, constructed assignments and lecture slides as well as managed TA course staff." image={AppDev} />
        <ExperienceCell title="iOS Engineer" org="Cornell AppDev" date="Ithaca, NY | Sep 2022 - Present" text="Introduction to iOS Development (CS 1998) at Cornell University, hosting lectures twice a week for a class of 100+ students. Created and taught course material, constructed assignments and lecture slides as well as managed TA course staff." image={AppDev} />
        <ExperienceCell title="Software Engineer Intern" org="LLounge" date="New York, NY | May 2023 - Aug 2023" text="Implemented, tested, and documented new flows with MVC architecture and UIKit framework. Incorporated location integration and implemented data cache to support storage of custom data objects. Utilized OOP and data structures to optimize program performance, and space-complexity." image={LLounge} />
        <ExperienceCell title="Consultant - CS 1110" org="Cornell University" date="Ithaca, NY | Sep 2022 - May 2023" text="Introduction to Computing: A Design and Development Perspective (FA22, SP23, FA23 - 500+ Students)." image={Cornell} />
      </motion.div>
    </section>
  )
}

export default ExperienceSection;