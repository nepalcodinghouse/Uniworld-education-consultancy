import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Classes from './pages/Classes'
import Courses from './pages/Courses'
import Blog from './pages/Blog'
import PageNotFound from './pages/PageNotFound'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import StudyAbroad from './pages/StudyAbroad'
import About from './pages/About'
import Gallery from './pages/Gallery'
import './App.css'

function Layout() {
  const location = useLocation()

  // detect if we're on the 404 page
  const hideLayout = location.pathname === '/404' || location.pathname === '*' || location.pathname === '/*'

  return (
    <>
      <ScrollToTop />
      {!hideLayout && <Header />}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App
