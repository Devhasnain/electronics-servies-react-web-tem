import React from 'react'
import AboutSection from '../compnents/AboutSection'
import Contact from '../compnents/Contact';
import HomeCarusel from '../compnents/HomeCarusel'
import ProjectsSection from '../compnents/ProjectsSection';
import ServicesSection from '../compnents/ServicesSection';
import TeamSection from '../compnents/TeamSection';
import '../CSS/home.css';

const Home = () => {
  return (
    <>
    <HomeCarusel/>
    <AboutSection/>
    <ServicesSection/>
    <ProjectsSection/>
    <TeamSection/>
    <Contact/>
    </>

  )
}

export default Home
