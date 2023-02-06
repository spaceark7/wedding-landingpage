import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import useSound from 'use-sound'
import { useSound as Permission } from '../hooks/useSound'

const AudioPlayer = () => {
  const { isPlaying, setIsPlaying } = Permission()
  const [play, pause] = useSound('/song.ogg', {
    volume: 0.5,
    loop: true,
    autoplay: true,
    interrupt: true,
  })

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    isPlaying ? play() : pause.pause()
    return () => {
      pause.stop()
    }
  }, [isPlaying])

  //   const handlePause = () => {
  //     AudioElement.current.pause()
  //     setIsPlaying(false)
  //   }
  //   const handlePlay = () => {
  //     AudioElement.current.play()
  //     setIsPlaying(true)
  //   }
  return (
    <div className='rounded-full bg-emerald-200 p-4'>
      {/* <ReactAudioPlayer
        ref={player}
        src='/song.mp3'
        volume={0.1}
        autoPlay={true}
        loop
      /> */}
      {isPlaying ? (
        <div onClick={togglePlay} className='flex items-center'>
          <PauseIcon className='h-4 w-4 text-emerald-700' />
        </div>
      ) : (
        <div onClick={togglePlay} className='flex items-center'>
          <PlayIcon className='h-4 w-4 text-emerald-700' />
        </div>
      )}
    </div>
  )
}

export default AudioPlayer
