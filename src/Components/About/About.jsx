import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src = {about_img} alt='' className='about-img'/>
            <img src = {play_icon} alt='' className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Our university empowers students to think critically, innovate boldly, and lead with purpose. Through rigorous academics and hands-on learning, we prepare graduates to thrive in a rapidly evolving world</p>
            <p>We celebrate diversity and global collaboration, fostering a campus culture that values inclusion, empathy, and cross-cultural understanding. Students gain the skills to make a meaningful impact—locally and globally.</p>
            <p>With cutting-edge research and expert mentorship, we help students turn ideas into action. Whether in labs, startups, or classrooms, our community is united by a passion for progress and lifelong learning.</p>

        </div>
    </div>
  )
}

export default About
