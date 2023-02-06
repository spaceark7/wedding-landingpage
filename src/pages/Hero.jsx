import { EnvelopeOpenIcon } from '@heroicons/react/24/solid'
import { useNavigate, useParams } from 'react-router-dom'
import { useSound } from '../hooks/useSound'
import { useSpring, animated } from '@react-spring/web'
import { motion } from 'framer-motion'
const Hero = () => {
  const { user } = useParams()
  const navigate = useNavigate()
  const { setIsPlaying } = useSound()

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  })

  const handleSubmit = () => {
    setIsPlaying(true)
    // navigate('/main')
    navigate('/main', { replace: true })
  }

  return (
    <motion.div
      initial={{ x: '-50%' }}
      animate={{
        x: 0,
        transition: {
          duration: 0.7,
          ease: 'easeOut',
        },
      }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.7,
          ease: 'easeOut',
        },
      }}
      className='relative flex h-screen  w-full select-none flex-col justify-between overflow-y-hidden bg-gradient-to-b from-emerald-100  pt-6  md:h-screen md:to-amber-100 lg:flex-row'
    >
      <div className='flex h-full text-emerald-900 lg:w-2/4 lg:pb-8'>
        <div className='my-auto mx-auto w-full text-center'>
          <div>
            <h1 className=' font-display text-2xl font-bold'>The Wedding of</h1>
            <h4 className='font-display text-5xl font-bold lg:text-7xl'>
              Rahmi & Hasbi
            </h4>
          </div>

          <div className='mx-auto my-3 h-[1px] max-w-xs bg-emerald-900 bg-black md:max-w-sm'></div>

          <div className='mt-4 space-y-1 text-emerald-900 lg:text-lg'>
            <p>19.02.2023</p>
          </div>
          {user && (
            <div className='my-8'>
              <h4>Kepada yang terhormat</h4>
              <h2 className='text-4xl font-semibold'>
                {user.charAt(0).toUpperCase() + user.slice(1)}
              </h2>
            </div>
          )}

          <div className='mx-2 mt-4  space-y-1 text-emerald-900 lg:text-lg'>
            <p className='mx-auto max-w-md text-sm xl:text-base  '>
              Tanpa mengurangi rasa hormat kami mengundang anda untuk hadir di
              acara pernikahan kami.
            </p>
          </div>

          <div className='mt-6 flex justify-center'>
            <div
              onClick={handleSubmit}
              className='flex cursor-pointer select-none items-center rounded-full border border-emerald-900 bg-yellow-400 py-1 pl-2 pr-3 font-semibold text-emerald-900 transition-all ease-in-out active:scale-95'
            >
              <EnvelopeOpenIcon className='mr-2 h-4 w-4' />
              Buka undangan
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-full lg:max-h-screen lg:w-2/4'>
        <motion.div
          initial={{ y: '80%', opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            type: 'spring',
            transition: {
              delay: 0.4,
              duration: 0.4,
              ease: 'easeOut',
              bounce: 2,
            },
          }}
          className='h-full w-full lg:flex lg:items-center '
        >
          <animated.div style={{ ...springs }}>
            <img
              src='/images/hero-bg-2.webp'
              alt='hero'
              className='h-full w-full object-contain object-top lg:hidden'
            />
          </animated.div>
          <animated.div style={{ ...springs }}>
            <img
              src='/images/hero-bg-2-lg.webp'
              alt='hero'
              className='hidden h-full w-full object-contain lg:absolute lg:bottom-0 lg:block lg:h-[550px] lg:w-[550px] lg:object-center 2xl:h-[800px] 2xl:w-[800px]'
            />
          </animated.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
