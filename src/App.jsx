import { useState } from 'react'
import projectList from './assets/projectList';
import Hero from './components/Hero'
import Navbar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import '@fontsource-variable/inter';

function App() {
  return (
    <>
    <Navbar/>
    <Hero title= "JACK DONOHOE"
     subtitle="Full Stack Developer, Masters Student in Advanced Computer Science."
     linkedin_link="https://www.linkedin.com/in/jack-donohoe-9a004a263/"
     github_link="https://github.com/JDonohoe101"
     />
     <About/>
     <Projects projects={projectList}/>

    </>
  )
}

export default App
