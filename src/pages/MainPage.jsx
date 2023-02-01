import BrideGroomDetail from '../components/BrideGroomDetail'
import Closing from '../components/Closing'
import Opening from '../components/Opening'

const MainPage = () => {
  return (
    <main>
      <Opening />
      {/* TODO create sticky scroll moving text with image stand still */}
      <div className='mx-auto h-[1px] max-w-sm bg-emerald-800'></div>
      <BrideGroomDetail />
      <Closing />
    </main>
  )
}

export default MainPage
