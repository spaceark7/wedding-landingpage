const Messages = ({ message }) => {
  return (
    <div className='w-full border-b p-4'>
      <div className='mb-2 flex items-center gap-x-2'>
        {message?.photoURL ? (
          <div className='relative h-11 w-11'>
            <img
              className='absolute top-0 h-full w-full rounded-full object-cover'
              src={message.photoURL}
              alt={message.displayName}
            />
          </div>
        ) : (
          <div className='relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-200 text-xl'>
            {message?.displayName[0]}
          </div>
        )}

        <div>
          <p className='text-sm'>{message?.displayName}</p>
          <p className='text-xs text-slate-500'>
            Dikirim pada :{' '}
            <span className='font-semibold'>
              {message.createdAt}
              {/* {format(message?.createdAt?.toDate(), 'PPPP | p', {
                locale: id,
              })} */}
            </span>
          </p>
        </div>
      </div>
      <div className='text-sm'>{message?.content}</div>
    </div>
  )
}

export default Messages
