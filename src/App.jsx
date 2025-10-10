import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import './App.css'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
