import React, { useState } from 'react'
import './hero.css'
import profileImage from '../../assets/profile1.jpg'
import 'animate.css'

const Hero = () => {

    const [isHidden, setIsHidden] = useState(1);

    const hide = () => {
        setIsHidden(1)
    };

    const unhide = () => {
        setIsHidden(0)
    };

    return (
        <section id='hero'>
            <div className='heroContent'>
                <p className='hello' style={{ color: 'black' }}>Hello, My name is</p>
                <p className='introText' style={{ color: 'black' }}>Ruizhe Sun</p>
                <br></br>
                <p className='introPara'>I am a current Masters of Engineering Student studying Computer Science and minoring in Data Science at <span className='cornell'>Cornell University</span> with experience in Data Science, Machine Learning, and Full-Stack Web and Mobile Development.</p>
                <span className='experience1'></span>
            </div>
            <img src={profileImage} alt='Profile' className={isHidden ? 'profile hidden2' : 'profile shown'} onAnimationStart={unhide} />

        </section>
    )
}

export default Hero;