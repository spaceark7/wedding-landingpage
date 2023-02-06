import { createContext, useState } from 'react'

const SoundContext = createContext({})

export const SoundProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <SoundContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </SoundContext.Provider>
  )
}

export default SoundContext
