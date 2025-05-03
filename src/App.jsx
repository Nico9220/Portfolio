import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import Home from './components/Home/Home'
import Hero from './pages/Hero'
import SobreMi from './components/SobreMi/SobreMi'
import Proyectos from './components/Proyectos/Proyectos'
import Contacto from './pages/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Proyectos/>
        <Contacto/>
        {/* <Home/>
        
        <Contacto/> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
