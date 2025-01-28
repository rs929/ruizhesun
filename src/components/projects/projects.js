import React, { useState, useEffect } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './projects.css'
import ProjectCell from './projectCell.js'
import ProjectModal from './projectModal.js'
import ScoopedMockup from "../../assets/scoopedMockup.png"
import FridgeKeeperMockup from "../../assets/fridgekeeperMockup.png"
import ResellMockup from "../../assets/resellMockup.png"
import ByteBitesMockup from "../../assets/bytebitesmockup.png"
import OScratchMockup from "../../assets/oscratchMockup.png"
import AlienMockup from "../../assets/alienMockup.png"

const projectAnimation = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
}

const ProjectsSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const updateModalVisible = (index) => {
    console.log("CLICK")
    if (modalVisible) {
      setModalVisible(false)
    } else {
      setModalVisible(true)
    }
    setProjectIndex(index)
  }

  const closeModal = () => {
    setModalVisible(false)
  }




  const projects = [
    {
      title: "Scooped",
      image: ScoopedMockup,
      date: "September 2022 - May 2023",
      description: "Want to explore cool places within Ithaca and beyond? Scooped’s proprietary search algorithm connects students that are traveling to similar locations and optimizes the traveling process. To put it simply: Scooped allows you to reach out to a driver that’s traveling to a similar location as you to get where you’re going faster. Cornell students want safe & affordable travel options to and from places within driving distance of Ithaca, and Scooped makes this dream a reality!",
      process: "I worked on Scooped for 3 semesters while on AppDev and worked to publish the app on the App Store. My contributions include implementing location integration and phone authentication with Google Places and Firebase, as well as the prototyping, and finilizing many of the user and ride flows",
      skills: ["Swift", "UIKit", "Google Places", "Firebase"],
      link: "https://github.com/cuappdev/scoop-ios"
    },
    {
      title: "SousChef",
      image: FridgeKeeperMockup,
      date: "May 2022 - Present",
      description: "SousChef is a user-friendly and innovative app that revolutionizes the way you manage your kitchen and cooking routines. This smart app helps you keep track of the items in your fridge and pantry and matches them with personalized recipes, making meal prep simple and sustainable.",
      process: "I started SousChef summer of 2022 as a personal project based on a struggle that me and a lot of my friends and family face: cooking innovative dishes without having to run to the grocery store to buy extra groceries. Thus, I decided to start developing this project as a means to learn React.js, React Native, and fortify my skills in UIKit iOS Development.",
      skills: ["React.js", "React Native", "Swift", "UIKit", "Flask", "Python"],
      link: "https://github.com/rs929/SousChef-Web"
    },
    {
      title: "Resell",
      image: ResellMockup,
      date: "December 2023 - Present",
      description: "Resell is a platform for students to browse and post listings of items that they want to sell and buy. By making Resell NetID authenticated, it provides a safe space for people to exchange unwanted items that can still be used by others.",
      process: "I worked on Resell for 1 semester while on AppDev and worked to publish the app on the AppStore. My contributions consist of implementing views and backend integration for user reporting and blocking",
      skills: ["React Native"],
      link: "https://github.com/cuappdev/resell-react-native"
    },
    {
      title: "ByteBites (SousChef-Model)",
      image: ByteBitesMockup,
      date: "August 2024 - Present",
      description: "Byte Bites is an AI-powered application that generates custom recipes based on user-provided ingredients and images. By leveraging advanced transformer models and machine learning techniques, Byte Bites aims to revolutionize the cooking experience, enabling users to explore creative and coherent recipes with minimal effort.",
      process: "As part of the Byte Bites project, I worked on developing an AI system that generates custom recipes based on user-provided ingredients and images. I gained hands-on experience with tools like PyTorch, Hugging Face Transformers, and spaCy to train and fine-tune models, including T5 for recipe generation. I also implemented contextual validation with BERT to ensure coherence and quality in generated recipes. Through this project, I learned the intricacies of training and fine-tuning transformers, including data preprocessing, tokenization strategies, hyperparameter tuning, and validation pipelines.",
      skills: ["Python", "PyTorch", "Scikit-learn", "Swift", "SwiftUI"],
      link: "https://github.com/rs929/SousChef-Model"
    },
    {
      title: "OScratch",
      image: OScratchMockup,
      date: "September 2023 - December 2023",
      description: "OScratch is a computer application designed to introduce programming concepts in a fun and interactive way. Similar to Scratch, OScratch utilizes a drag-and-drop interface that empowers users, especially beginners and young learners, to easily create animated sequences by assembling colorful and intuitive code blocks, but was coded entirely using OCaml and Functional Programming Techniques.",
      process: "I worked on OScratch as the Final Project for CS 3110: Functional Programming and Data Structures.",
      skills: ["OCaml", "RayLib", "Functional Programming"],
      link: "https://github.com/rs929/OScratch"
    },
    {
      title: "Alien Assassin",
      image: AlienMockup,
      date: "September 2021 - December 2021",
      description: "Alien Infiltration is a classic arcade-style computer game reminiscent of the familiar alien invaders concept. Step into the cockpit of a spaceship as you face waves of alien foes, engaging in a simple and straightforward battle for survival.",
      process: "I worked on Alien Assassin as the Final Project for CS 1110: Intro to Computing with Python. Collaborated with ",
      skills: ["Python"],
      collaborators: "Noelle Pappous",
      collabLinks: "https://www.linkedin.com/in/noelle-pappous-985727240/",
      link: "https://github.com/rs929/Alien-Assassin"
    }
  ]

  return (
    <section className='projectSection'>
      <h1>Projects</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ProjectModal show={modalVisible} closeModal={closeModal} project={projects[projectIndex]} />
      <p>Below is a spotlight some of the exciting and impactful projects I've worked on with information about their development. Each project represents a unique challenge and an opportunity to push the boundaries of my skills.</p>
      <br></br>
      <br></br>
      <br></br>
      <motion.div variants={projectAnimation}
        initial="hidden"
        whileInView="visible" id='projects'>
        <div className='project' onClick={() => updateModalVisible(3)}>
          <ProjectCell image={ByteBitesMockup} />
        </div>
        <div className='project' onClick={() => updateModalVisible(1)}>
          <ProjectCell image={FridgeKeeperMockup} />
        </div>
        <div className='project' onClick={() => updateModalVisible(2)}>
          <ProjectCell image={ResellMockup} />
        </div>
        <div className='project' onClick={() => updateModalVisible(0)}>
          <ProjectCell image={ScoopedMockup} />
        </div>
        <div className='project' onClick={() => updateModalVisible(4)}>
          <ProjectCell image={OScratchMockup} />
        </div>
        <div className='project' onClick={() => updateModalVisible(5)}>
          <ProjectCell image={AlienMockup} />
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectsSection;