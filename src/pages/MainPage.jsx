import { ParallaxProvider } from 'react-scroll-parallax'
import AudioPlayer from '../components/AudioPlayer'
import BrideGroomDetail from '../components/BrideGroomDetail'
import Closing from '../components/Closing'
import Opening from '../components/Opening'

const MainPage = () => {
  return (
    <main className='relative '>
      <ParallaxProvider>
        <Opening />
        {/* TODO create sticky scroll moving text with image stand still */}
        <div className='mx-auto h-[1px] max-w-sm bg-emerald-800'></div>
        <BrideGroomDetail />
        <Closing />
        <div className='fixed right-2 bottom-4 z-40'>
          <AudioPlayer />
        </div>
      </ParallaxProvider>
      <div className='fixed top-0 left-0 -z-50 h-[100vh] w-full  bg-openingBGOverlay bg-cover opacity-25'></div>
    </main>
  )
}

export default MainPage
