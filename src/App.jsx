import { Routes, Route } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GMDIPage from './pages/GMDIPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gmdi" element={<GMDIPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
