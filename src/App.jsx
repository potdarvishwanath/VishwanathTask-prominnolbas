import { useState } from 'react'
import './App.css'
import Preloader from './components/common/Loader/Preloader'
import Navbar from './components/common/Navbar'
import HomePage from './components/Pages/HomePage'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Preloader />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
