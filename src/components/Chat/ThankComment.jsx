import { useLottie } from 'lottie-react'
import emojiWink from '../../assets/emoji-wink.json'
const ThankComment = () => {
  const option = {
    animationData: emojiWink,
    loop: true,
    style: {
      height: 96,
    },
  }
  const { View } = useLottie(option)
  return (
    <div className='mx-auto flex max-w-lg items-center gap-x-1 rounded-xl bg-white shadow-lg'>
      <div className='w-1/3'>{View}</div>
      <div className='w-2/3'>
        <h5 className='text-sm font-semibold text-slate-600'>
          Terima kasih sudah mengirimkan doa. Semoga allah membalas kebaikan
          kalian.
        </h5>
      </div>
    </div>
  )
}

export default ThankComment
