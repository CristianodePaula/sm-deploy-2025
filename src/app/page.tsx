'use client'
import React, { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import { motion } from "framer-motion"
import Hero from './components/Heeader/Hero'
import AboutSection from './components/About/About'
import Slider from './components/Slider/Slider'
import Adverts from './components/Adverts/Adverts'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProblemSolution from './components/ProblemSolution/ProblemSolution'
import AISolution from './components/AISolution/AISolution'
import Sidebar from './components/Sidebar/Sidebar'

export default function App() {

    const [open, setOpen] = useState(false)
    const alternate = () => {
        setOpen(!open)
    }
    return (
      <motion.div initial="hidden" animate="show">
        <Navbar alternate={alternate} open={open} /> 
        <Sidebar open={open} alternate={alternate} />
        <Hero />
        <ProblemSolution />
        <AboutSection />
        <AISolution />
        <Adverts />
        <Slider />
        <Contact />
        <Footer />
      </motion.div>
    )
} 
 

