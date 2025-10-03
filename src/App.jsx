import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Project from './components/Project'
import SkillsPage from './components/SkillsPage'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <Project />
      <SkillsPage />
      <Contact />
      
    </>
  )
}

export default App
