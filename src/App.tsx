import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Layouts from './layouts'
import PricingSection from './components/PricingSection'
import ContactSection from './components/ContactSection'
import Modal from './components/Modal'
import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div style={{ scrollBehavior: 'smooth'}}>
      <Modal isOpen={isOpen} title='Login' handleClose={() => {setIsOpen(false)}}>
        <Login  />
      </Modal>
      <Layouts onClick={() => setIsOpen(true)}>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </Layouts>
    </div>
  )
}

export default App
