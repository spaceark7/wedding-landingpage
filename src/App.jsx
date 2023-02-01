import { Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero'
import MainPage from './pages/MainPage'

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/:user' element={<Hero />} />
        <Route path='/main' element={<MainPage />} />
        {/* Detail Information */}
        {/* Bride & Groom Information */}
        {/* Chatting Section */}
        {/* Donation */}
      </Routes>
    </main>
  )
}

export default App
