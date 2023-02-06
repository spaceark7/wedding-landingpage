import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import { SoundProvider } from './context/SoundProvider'
import Hero from './pages/Hero'
import MainPage from './pages/MainPage'

function App() {
  const location = useLocation()

  return (
    <main className='App relative'>
      <SoundProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Hero />} />
            <Route path='/:user' element={<Hero />} />
            <Route path='/main' element={<MainPage />} />
            {/* Detail Information */}
            {/* Bride & Groom Information */}
            {/* Chatting Section */}
            {/* Donation */}
          </Routes>
        </AnimatePresence>
      </SoundProvider>
    </main>
  )
}

export default App
