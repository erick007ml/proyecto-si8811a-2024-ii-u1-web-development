export const Skeleton = ({ index }: { index: number }) => {
  return (
    <div
      key={index}
      className='animate-pulse bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none'
    >
      <div className='animate-pulse flex flex-col flex-1 gap-5 sm:p-2'>
        <div className='flex flex-1 flex-col gap-3'>
          <div className='bg-gray-200 w-full animate-pulse h-14 rounded-2xl'></div>
          <div className='bg-gray-200 w-full animate-pulse h-3 rounded-2xl'></div>
          <div className='bg-gray-200 w-full animate-pulse h-3 rounded-2xl'></div>
          <div className='bg-gray-200 w-full animate-pulse h-3 rounded-2xl'></div>
          <div className='bg-gray-200 w-full animate-pulse h-3 rounded-2xl'></div>
        </div>
        <div className='mt-auto flex gap-3'>
          <div className='bg-gray-200 w-20 h-8 animate-pulse rounded-full'></div>
          <div className='bg-gray-200 w-20 h-8 animate-pulse rounded-full'></div>
          <div className='bg-gray-200 w-20 h-8 animate-pulse ml-auto rounded-full'></div>
        </div>
      </div>
    </div>
  )
}
