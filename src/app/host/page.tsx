"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function HostPage() {
  const router = useRouter()
  const skeletonItems = Array.from({ length: 5 }, (_, i) => i)
  
  useEffect(() => {
    router.replace("/host/dashboard")
  }, [router])
  
  const skeletonElements = skeletonItems.map(index => (
    <div key={index} className="flex items-center gap-[1.25em] max-w-[440px] min-[925px]:w-[410px] py-[1.125em] pl-[0.85em]">
      <Skeleton className='h-16 w-16 min-w-[65px] rounded-[5px]' />
      <div className="flex flex-col">
        <Skeleton className='h-5 w-[170px] sm:w-[240px] rounded-[3px] mb-[0.5em]' />
        <Skeleton className='h-5 w-[100px] rounded-[3px]' />
      </div>
    </div>
  ))

  return (
    <section className='flex flex-col px-[1.625em] min-[600px]:px-[4em]'>
      <Skeleton className='h-14 w-full rounded-[4px]' />
      <div className='flex flex-col mt-[2em] min-[500px]:mt-[2.25em] mb-[3.125em]'>
        <Skeleton className='h-9 w-[70%] sm:w-[300px] rounded-[4px] mb-[0.81em]' />
        <div className='flex flex-col min-[925px]:flex-row min-[925px]:flex-wrap gap-[0.9375em] min-[925px]:gap-[1.5em]'>
          {skeletonElements}
        </div>
      </div>
    </section>
  )
}