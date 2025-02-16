import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonVanForm() {
  return (
    <section className='flex flex-col w-full sm:mx-auto max-w-[920px] px-[1.625em] pt-[1.4375em] pb-[1.625em]'>
      <div className='flex flex-col min-[470px]:flex-row min-[470px]:items-center min-[470px]:gap-6 mb-[1.5em]'>
        <Skeleton className='w-[155px] h-[155px] rounded-[5px] mb-[1.5em] sm:mb-0'/>
        <div className='flex flex-col mb-[1em]'>
          <Skeleton className='h-6 w-[70px] self-start px-[0.8125em] py-[0.25em] mb-[1.125em] rounded-[5px]' />
          <Skeleton className='h-5 w-[160px] mb-[0.4em] rounded-[5px]' />
          <Skeleton className='h-[1.15rem] w-[90px] rounded-[5px]' />
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex items-center gap-2 mb-5'>
          <Skeleton className='h-5 w-[70px] rounded-[4px]' />
          <Skeleton className='h-5 w-[240px] rounded-[4px]' />
        </div>
        <div className="mb-6">
          <Skeleton className="mb-3 h-5 w-[70px] rounded-[4px]" />
          <div className="flex pl-3 justify-betweens">
            <Skeleton className='h-5 w-[110px] rounded-[4px] mr-5' />
            <Skeleton className='h-5 w-[110px] rounded-[4px] mr-5' />
            <Skeleton className='h-5 w-[110px] rounded-[4px]' />
          </div>
        </div>
        <div className='flex items-center gap-2 mb-6'>
          <Skeleton className='h-5 w-[60px] rounded-[4px]' />
          <Skeleton className='h-5 w-[110px] rounded-[4px]'/>
        </div>
        <Skeleton className="h-5 w-[110px] rounded-[4px] mb-4" />
        <Skeleton className="h-20 w-full mb-6 rounded-[4px]" />
        <Skeleton className="h-5 w-[90px] rounded-[4px] mb-4" />
        <Skeleton className="h-20 w-full mb-12 rounded-[4px]" />
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-0 sm:justify-between">
          <Skeleton className='w-[140px] h-9 rounded-[5px]' />
          <Skeleton className='w-[140px] h-9 rounded-[5px]' />
        </div>
      </div>
    </section>
  )
}