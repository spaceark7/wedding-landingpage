import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'
import { Logout, sendComment, signInWithGoogle } from '../../firebase/firebase'
import useComments from '../../firebase/hooks/useComments'
import Messages from './Messages'
import ThankComment from './ThankComment'

const ChatApp = ({ resetScroll }) => {
  const [user, setUser] = useState(null)
  const [comment, setComment] = useState('')
  const [loadingSignIn, setLoadingSignIn] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [hideCommentBox, setHideCommentBox] = useState(false)
  const commentRef = useRef()
  const commentBox = useRef()
  const commentsList = useComments()

  const onCommentChange = (e) => {
    setComment(e.target.value)
  }

  const setGoogleUser = async () => {
    setLoadingSignIn(true)
    const data = await signInWithGoogle()
    console.log(data.uid)
    setUser(data)
    isUserComment(data)
    setLoadingSignIn(false)
  }

  const isUserComment = (user) => {
    const res = commentsList.find((comment) => comment.uid === user.uid)
    if (res?.uid) {
      setHideCommentBox(true)
    }
  }

  const handleSignOut = async () => {
    await Logout()
    setUser(null)
  }

  const handleSendComment = async () => {
    setLoadingSubmit(true)
    await sendComment(comment, user)
    resetScroll()
    commentRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    commentBox.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    setLoadingSubmit(false)
    setHideCommentBox(true)
    setComment('')
  }

  return (
    <div ref={commentBox} className='z-40 mx-auto max-w-screen-md px-8 pb-32'>
      {/* Chat Block */}

      <div className='relative mt-6 h-full  w-full  rounded-xl border border-slate-100 bg-white pb-3  shadow-md'>
        <h2 className='sticky top-0 z-30 border-b bg-white p-4 font-display text-2xl font-semibold'>
          Their Best Wishes
        </h2>
        <div ref={commentRef} className='max-h-[70vh] overflow-y-auto py-4'>
          {commentsList &&
            commentsList.map((comment) => (
              <Messages key={comment.id} message={comment} />
            ))}
        </div>
      </div>
      {/* User text Block */}

      {user ? (
        <div className='mt-6 w-full'>
          <div className='py-2'>
            <p className='text-sm font-semibold'>Anda login sebagai :</p>
            <div className='mt-2 flex items-center gap-x-2'>
              <div className='relative  h-11 w-11'>
                <img
                  className='absolute top-0 h-full w-full rounded-full object-contain'
                  src={user.photoURL}
                />
              </div>
              <div>
                <p>{user.displayName}</p>
              </div>
              <div>
                <button
                  onClick={handleSignOut}
                  className='ml-4 text-sm font-semibold text-blue-700'
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          {hideCommentBox ? (
            <ThankComment />
          ) : (
            <>
              <textarea
                className='w-full resize-none rounded-md border border-emerald-800 p-2 text-sm placeholder:italic focus:outline-emerald-700'
                name='comment'
                id='comment'
                placeholder='Kirim Doa terbaikmu disini ...'
                cols='30'
                rows='3'
                maxLength={250}
                value={comment}
                onChange={onCommentChange}
              />
              <div className='flex items-center justify-between '>
                <p className='self-start text-xs'>Maks 250 Karakter</p>
                <button
                  className='transform rounded-lg bg-emerald-800 p-2 px-4 text-white transition-all duration-300 ease-in-out active:scale-95 disabled:bg-gray-400 disabled:active:scale-100'
                  disabled={comment.length < 10 || loadingSubmit}
                >
                  {comment.length < 10 ? (
                    <span className='text-sm'>Oops, Terlalu pendek :(</span>
                  ) : (
                    <span
                      onClick={handleSendComment}
                      className='flex items-center'
                    >
                      <PaperAirplaneIcon className='mr-2 h-4 w-4' /> Nice! Kirim
                      Doa
                    </span>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className='mt-6 w-full'>
          <div className='py-2'>
            <p className='text-sm font-semibold'>
              Login untuk mengirimkan pesan
            </p>
          </div>
          {loadingSignIn ? (
            <button
              type='button'
              className='inline-flex cursor-not-allowed items-center rounded-md px-4 py-2 text-sm font-semibold leading-6  shadow transition duration-150 ease-in-out hover:bg-gray-200'
              disabled
            >
              <svg
                className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              Processing...
            </button>
          ) : (
            <button
              className='transform rounded-lg border bg-white p-2 px-4 transition-all duration-300 ease-in-out active:scale-95 disabled:bg-gray-400 disabled:active:scale-100'
              onClick={setGoogleUser}
            >
              <span className='flex items-center text-sm'>
                <img
                  className='mr-2 h-5 w-5'
                  src='/images/google_icon.svg'
                  alt='google icon'
                />
                Login Dengan Akun Google
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ChatApp
