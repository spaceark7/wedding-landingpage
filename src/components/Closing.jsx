import { useRef } from 'react'
import ChatApp from './Chat/ChatApp'

const Closing = () => {
  const scrollReset = useRef()
  const resetPosition = () => {
    console.log('scrolling')
    scrollReset.current.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }
  return (
    <div className='z-30 min-h-screen '>
      <section ref={scrollReset}>
        <div className=' pt-2'>
          <div className=''>
            <img
              className='mx-auto h-12 w-12'
              src='/images/flower.png'
              alt='flower overlay'
              srcSet='/images/flower.png'
            />
          </div>

          <div className='px-6 text-center'>
            <h1 className='text-center font-display text-4xl font-bold'>
              Doa & Dukungan kalian sangat berarti bagi kami
            </h1>
            <p className='mt-6 text-sm md:text-base'>
              Tiada yang dapat kami ungkapkan selain Rasa Terima Kasih untuk
              setiap doa dan dukungan dari kalian
            </p>
          </div>
        </div>

        <ChatApp resetScroll={resetPosition} />
        <div className='  bg-blue-500 py-8'>
          <div className='flex  min-h-[40vh] flex-col justify-around'>
            <h2 className='pb-6 text-center text-xl font-medium text-white opacity-90'>
              Website ini ditenagai oleh
            </h2>

            <div className='item-center my-auto flex h-60 flex-col justify-around px-8  md:h-40 md:flex-row'>
              <div className='flex h-full w-full items-center justify-center md:w-1/2'>
                <div className='relative h-12 w-full md:h-16 md:w-1/2 '>
                  <img
                    className='absolute top-0 h-full w-full object-contain'
                    src='/images/logo-knockout.png'
                    alt='firebase logo'
                  />
                </div>
              </div>

              <div className='relative flex h-full items-center justify-center md:w-1/2'>
                <h2 className='text-center text-2xl font-medium text-white md:text-4xl'>
                  Yubicom Server
                </h2>
              </div>
            </div>
          </div>
          <div className='text-center text-white '>
            <p className='opacity-40'>Dibuat oleh</p>
            <p>Explore Creative Design</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Closing
