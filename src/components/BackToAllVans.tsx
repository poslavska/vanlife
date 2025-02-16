import Link from 'next/link'

interface BackToAllVansProps {
  location: string
}

export default function BackToAllVans({location}:BackToAllVansProps) {
  return (
    <Link href={location}
      className='text-[#201F1D] font-medium text-[1rem] min-[500px]:text-[1.25rem] mb-[2.25em] sm:mb-[1.825em]'>
      <span className='text-[#858585] font-semibold'>←</span> <span className='underline underline-offset-4 ml-[0.5em]'>Back to all vans</span>
    </Link>
  )
}
