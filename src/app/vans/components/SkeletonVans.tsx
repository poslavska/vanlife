import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonVans() {
  const skeletonItems = Array.from({ length: 4 }, (_, i) => i)

  const skeletonElements = skeletonItems.map(index => (
    <div key={index} className='flex flex-col'>
      <Skeleton className='rounded-[5px] w-[220px] h-[220px]'/>
      <div className='flex justify-between pt-[0.5em]'>
        <Skeleton className='w-[140px] h-6 rounded-[5px]'/>
        <div className='flex flex-col gap-1'>
          <Skeleton className='w-11 h-6 rounded-[5px]'/>
          <Skeleton className='w-8 h-4 rounded-[5px] self-end'/>
        </div>
      </div>
      <Skeleton className='self-start px-[0.8125em] py-[0.3125em] rounded-[5px] w-[85px] h-8'/>
    </div>
  ))
  return (
    <>
      {skeletonElements}
    </>
  )
}