import { useContext } from 'react'
import SoundContext from '../context/SoundProvider'

export const useSound = () => {
  return useContext(SoundContext)
}
