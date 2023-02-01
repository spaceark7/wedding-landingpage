import {
  CalendarIcon,
  ClockIcon,
  MapIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

const EventDetail = () => {
  const setReminder = () => {
    window.open(
      'http://www.google.com/calendar/event?action=TEMPLATE&dates=20230219T020000Z%2F20230219T030000Z&text=Ami%20%26%20Hasbi%20Wedding&location=Vila%20Kana%20No.%206%2C%20Jl.%20Komp.%20Villa%20Bukit%20Mas%2C%20Palasari%2C%20Kec.%20Cipanas%2C%20Kabupaten%20Cianjur%2C%20Jawa%20Barat%2043253&details=Acara%20pernikahan%20Ami%20%26%20Hasbi',
      '_blank'
    )
  }
  const getRoute = () => {
    window.open(
      'https://www.google.com/maps/place/Villa+Kana+Bukit+Mas/@-6.1848505,106.841822,13z/data=!4m5!3m4!1s0x2e69b3ae72f1dde9:0xf69d938f7067e844!8m2!3d-6.7138507!4d107.0299013',
      '_blank'
    )
  }
  return (
    <div className='relative my-12  min-h-screen '>
      <div className='mb-4  pt-6'>
        <div className=''>
          <img
            className='mx-auto h-12 w-12'
            src='/images/flower.png'
            alt='flower overlay'
            srcSet='/images/flower.png'
          />
        </div>

        <h1 className='text-center text-2xl font-bold'>Detail Acara</h1>
      </div>
      <div className='flex flex-col justify-between space-y-12  py-8'>
        <div className='mx-auto w-full max-w-sm rounded-md border-b border-emerald-500 p-8'>
          <div className='flex  items-center  gap-y-3 '>
            <div className='mr-6 self-start rounded-md  p-2 '>
              <ClockIcon
                className='h-12 w-12 text-emerald-800'
                aria-hidden='true'
              />
            </div>
            <div>
              <p className='my-2  text-lg font-semibold'>
                Minggu, 19 Februari 2023
              </p>
              <div>
                <h2>Akad Nikah</h2>

                <p className='mb-4 text-sm'>Jam 08.00 - 10.00</p>
              </div>
              <div>
                <h2>Resepsi</h2>

                <p className='mb-4 text-sm'>Jam 10.00 - 16.00</p>
              </div>

              <button
                onClick={setReminder}
                className='rounded-md border border-yellow-700 p-2 text-sm text-yellow-700 transition-all ease-in-out hover:scale-105  hover:bg-yellow-50 hover:shadow-md active:scale-95'
              >
                <div className='inline-flex items-center'>
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  Ingatkan saya
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className='mx-auto w-full max-w-sm rounded-md  p-8'>
          <div className='flex items-center  gap-y-3'>
            <div className='mr-6 self-start rounded-md  p-2'>
              <MapPinIcon
                className='h-12 w-12 text-emerald-800'
                aria-hidden='true'
              />
            </div>
            <div>
              <p className='my-2  text-lg font-semibold'>Villa Kana No. 6</p>
              <p className='text-sm'>
                Jl. Komp. Villa Bukit Mas, Palasari, Kec. Cipanas, Kabupaten
                Cianjur, Jawa Barat 43253
              </p>
            </div>
          </div>
          <div
            onClick={getRoute}
            className='mt-8 h-full w-full rounded-xl border border-4 border-yellow-400 shadow-md'
          >
            <iframe
              onClick={getRoute}
              className='rounded-xl'
              height={'250px'}
              width={'100%'}
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.65358827538293!2d107.02990462369796!3d-6.713899298334261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3ae72f1dde9%3A0xf69d938f7067e844!2sVilla%20Kana%20Bukit%20Mas!5e0!3m2!1sen!2sid!4v1674658836972!5m2!1sen!2sid'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='mx-auto mt-6 flex w-full justify-center'>
            <button
              onClick={getRoute}
              className='rounded-md border border-yellow-700 p-2 text-sm text-yellow-700 transition-all ease-in-out hover:scale-105  hover:bg-yellow-50 hover:shadow-md active:scale-95'
            >
              <div className='mx-auto inline-flex items-center'>
                <MapIcon className='mr-2 h-4 w-4' />
                Lihat Petunjuk Arah
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
