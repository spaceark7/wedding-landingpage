import { useParallax } from 'react-scroll-parallax'
import EventDetail from './EventDetail'
import { motion } from 'framer-motion'
const Opening = () => {
  const parallaxHeader = useParallax({
    speed: 2,
  })

  return (
    <motion.div
      initial={{ y: '80%', opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: 'easeOut',
        },
      }}
      exit={{
        y: '100%',
        opacity: 0,
        transition: {
          duration: 0.7,
          ease: 'easeOut',
        },
      }}
      className='relative h-full min-h-screen'
    >
      <section className='relative flex flex-col px-4 lg:flex-row'>
        <div className='top-0 left-0 z-10  h-2/4 md:sticky lg:sticky lg:flex lg:h-screen lg:w-1/2 lg:items-center'>
          <img
            className='mx-auto h-full w-full object-contain md:aspect-video md:h-[500px] lg:max-w-screen-sm'
            src='/images/bg-opening.webp'
            alt='hasbi dan rahmi'
          />
        </div>

        <div className='h-2/4 w-full items-center justify-center py-8 lg:flex lg:min-h-screen lg:w-1/2 lg:flex-col'>
          <div
            ref={parallaxHeader.ref}
            className='flex flex-col items-center justify-center px-8 lg:h-screen'
          >
            <h2 className='mb-6 text-center font-display text-5xl font-bold md:text-7xl'>
              Rahmi & Hasbi
            </h2>

            <p className='text-center font-medium italic md:px-8 '>
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah DIa menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tentram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang."
            </p>

            <p className='mt-2 text-center font-medium'>(Q.S Ar-Rum 21)</p>
          </div>

          <EventDetail />
        </div>
      </section>
    </motion.div>
  )
}

export default Opening
