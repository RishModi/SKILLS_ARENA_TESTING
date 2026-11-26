import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/events'
import MatchDetails from './pages/MatchDetails'
import Stadium from './pages/Stadium'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/match/:id" element={<MatchDetails />} />
        <Route path="/match/:id/stadium" element={<Stadium />} />
      </Routes>
    </div>
  )
}

export default App