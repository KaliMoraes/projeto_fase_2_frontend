import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SerieCreate from './pages/SerieCreate'
import SerieListPage from './pages/SerieListPage'

export default function App(){
  return (
    <div>
      <header className="nav" role="banner">
        <strong style={{marginRight:12}}>Series Journal</strong>
        <nav aria-label="principal" style={{display:'flex', gap:12}}>
          <Link to="/" style={{color:'white'}}>Home</Link>
          <Link to="/sobre" style={{color:'white'}}>Sobre</Link>
          <Link to="/cadastrar" style={{color:'white'}}>Cadastrar</Link>
          <Link to="/lista" style={{color:'white'}}>Lista</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cadastrar" element={<SerieCreate />} />
          <Route path="/lista" element={<SerieListPage />} />
        </Routes>
      </main>
    </div>
  )
}
