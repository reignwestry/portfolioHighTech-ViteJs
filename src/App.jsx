// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HeroSection from './components/sections/HeroSection';
import ShowcaseSection from './components/sections/ShowcaseSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import './scss/App.scss';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
