import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home'
import About from './pages/about-us'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
