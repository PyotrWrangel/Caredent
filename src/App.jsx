import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage/Homepage'
import About from './Pages/aboutUsPage/About'
import Register from './Pages/RegisterPage/Register'
import Insurance from './Pages/InsurancePage/Insurance'
import Services from './Pages/ServicesPage/Service'
import Specialists from './Pages/SpecialistsPage/Specialists'
import Working from './assets/workingAdvisor/working'




function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Working title="Pagina about in costruzione"/>} />
        <Route path="/insurance" element={<Working title="Pagina assicurazioni in lavorazione" />} />
        <Route path="/services" element={<Working title="Pagina servizi in lavorazione" />} />
        <Route path="/specialists" element={<Working title="Pagina specialisti in lavorazione" />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
