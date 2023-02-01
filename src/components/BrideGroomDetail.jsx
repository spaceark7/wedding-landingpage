const BrideGroomDetail = () => {
  return (
    <div className='my-12 min-h-screen '>
      <section>
        <div className='mb-4 pt-2'>
          <div className=''>
            <img
              className='mx-auto h-12 w-12'
              src='/images/flower.png'
              alt='flower overlay'
              srcSet='/images/flower.png'
            />
          </div>

          <h1 className='text-center font-display text-4xl font-bold'>
            Memperkenalkan Kedua Mempelai
          </h1>
        </div>
        <div className='relative flex flex-col lg:flex-row'>
          <div className='relative flex flex-col p-8 lg:w-1/2'>
            <div className='mt-6 space-y-3 px-6 text-center'>
              <p className='font-display text-xl font-bold'>Mempelai Pria</p>
              <h4 className='text-3xl font-bold text-emerald-700'>
                Hasbi Assidiqi
              </h4>
              <p>Putra pertama dari Bapak Ahmad & Ibu Nain Nurhayati.</p>
            </div>
            <div className='h-4/5 object-left md:sticky lg:flex lg:h-screen lg:w-full lg:items-center'>
              <img
                className='z-10 mx-auto h-full w-full  rounded-xl  object-contain lg:max-w-screen-sm'
                src='/images/hasbi.webp'
                alt='hasbi dan rahmi'
              />
              <div className='absolute left-1/2 top-1/2 -z-[2]  h-56 w-44 rounded-lg bg-emerald-700'></div>
            </div>
          </div>
          <div className=' flex items-center'>
            <img
              className='z-10 mx-auto h-20 w-full rounded-xl  object-contain  md:h-56 lg:max-w-screen-sm'
              src='/images/wedding_ring.png'
              alt='hasbi dan rahmi'
            />
          </div>
          <div className='relative flex flex-col p-8 lg:w-1/2'>
            <div className='mt-6 space-y-3 px-6 text-center'>
              <p className='font-display text-xl font-bold'>Mempelai Wanita</p>
              <h4 className='text-3xl font-bold text-emerald-700'>
                Rahmi Rohmawati
              </h4>
              <p>Putri kedua dari Bapak Rohman & Ibu Hasanah.</p>
            </div>
            <div className='h-4/5 md:sticky lg:flex lg:h-screen lg:w-full lg:items-center'>
              <img
                className='z-10 mx-auto h-full w-full  rounded-xl  object-contain lg:max-w-screen-sm'
                src='/images/rahmi_2.webp'
                alt='hasbi dan rahmi'
              />
              <div className='absolute left-1/4 top-1/2 -z-[2]  h-56 w-44 rounded-lg bg-emerald-700'></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrideGroomDetail
