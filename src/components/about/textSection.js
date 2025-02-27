import React, { useState, useEffect } from 'react'
import './textSection.css'
import cornell from '../../assets/cornell.jpg'
import me2 from '../../assets/me2.jpg'
import me3 from '../../assets/me3.jpg'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aboutAnimation = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
}

const TextSection = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <motion.section ref={ref}
            variants={aboutAnimation}
            initial="hidden"
            whileInView="visible" id='header'>
            <div className='content'>
                <h1 className='underline'>About Me</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>I am a current Masters of Engineering studying Computer Science and minoring in Data Science at Cornell University, and over the past 4 years, I have honed my skills in software engineering through internships, personal projects, project team contributions, and a dedication to staying current with industry trends and best practices. </p>
                <br></br>
                <p>In my roles as iOS Software Lead and course instructor at <span className='cornell'>Cornell AppDev</span>, I have not only honed my skills in software development, but also I’ve been able to thrive in a collaborative environment and develop my leadership skills in guiding and mentoring a large class of students. I am a self-motivated individual who is always eager to learn new skills, and I am looking for opportunities to apply my academic knowledge and further explore my passions in Software Engineering.</p>
                <br></br>
                <p>In my free time, I like drawing, making origami, swimming, hiking, and playing violin.</p>
            </div>
            <div className='imageCollection'>
                <img id='img1' src={me3}></img>
                <img id='img2' src={me2}></img>
                <img id='img3' src={cornell}></img>
            </div>
        </motion.section>
    )

}

export default TextSection;