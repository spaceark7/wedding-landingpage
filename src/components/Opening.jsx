import EventDetail from './EventDetail'

const Opening = () => {
  return (
    <div className='relative h-full min-h-screen'>
      <div className='fixed top-0 left-0 -z-30 h-[90vh] w-screen bg-openingBGOverlay bg-cover opacity-25'></div>
      <section className=' flex flex-col px-4 lg:flex-row'>
        <div className='top-0 z-10 h-2/4  md:sticky lg:flex lg:h-screen lg:w-1/2 lg:items-center'>
          <img
            className='mx-auto h-full w-full object-contain md:aspect-video md:h-[500px] lg:max-w-screen-sm'
            src='/images/bg-opening.webp'
            alt='hasbi dan rahmi'
          />
        </div>
        <div className='h-2/4 w-full items-center justify-center py-8 lg:flex lg:min-h-screen lg:w-1/2 lg:flex-col'>
          <div className='flex flex-col items-center justify-center px-8 lg:h-screen'>
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
    </div>
  )
}

export default Opening
