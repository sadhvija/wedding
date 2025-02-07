import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
import FAQ from './Components/FAQ/FAQ'
import Outfit from './Components/Outfit/Outfit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outfit/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
