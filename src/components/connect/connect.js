import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './connect.css'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const connectAnimation = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
}

const ConnectSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section id='connect'>
      <hr></hr>
      <motion.div id='icons' variants={connectAnimation}>
        <Link to="https://www.linkedin.com/in/ruizhe-sun/" target='_blank'>
          <FaLinkedinIn className='footerIcon' />
        </Link>

        <Link to="https://github.com/rs929/" target='_blank'>
          <FaGithub className='footerIcon' />
        </Link>

        <Link to="https://www.instagram.com/richiesun_915/" target='_blank'>
          <FaInstagram className='footerIcon' />
        </Link>

        <Link to="mailto:rs929@cornell.edu">
          <IoIosMail className='footerIcon' />
        </Link>
      </motion.div>
      <p>Copyright © Ruizhe Sun</p>
    </section>
  )
}

export default ConnectSection;