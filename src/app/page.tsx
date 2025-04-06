'use client'
import React, { useState } from 'react'

import { motion } from "framer-motion"
import TopNavbar from '@/components/TopNavbar'
import Sidebar from '@/components/HamburgerMenu'
import HeroSection from '@/sections/HeroSection'
import ProblemSoluctionSection from '@/sections/ProblemSoluctionSection'
import ContactSection from '@/sections/ContactSection'
import Footer from '@/components/Footer/Footer'
import Slider from '@/sections/ValuesSection'
import ValuesSection from '@/sections/ValuesSection'
import ProductDemoSection from '@/sections/ProductDemoSection'
import TechnologiesSection from '@/sections/TechnologiesSection'
import EcosystemSection from '@/sections/EcosystemSection'


export default function App() {

    const [open, setOpen] = useState(false)
    const alternate = () => {
        setOpen(!open)
    }
    return (
      <motion.div initial="hidden" animate="show">
        <TopNavbar alternate={alternate} open={open} /> 
        <Sidebar open={open} alternate={alternate} />
        <HeroSection  />
        <ProblemSoluctionSection />
        <ProductDemoSection />
        <TechnologiesSection />
        <EcosystemSection />
        <ValuesSection />
        <ContactSection />
        <Footer />
      </motion.div>
    )
} 
 

