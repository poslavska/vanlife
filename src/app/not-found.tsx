import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='max-w-[494px] font-bold mx-auto pt-[5.625em]'>
      <h2 className='text-[2rem] text-[#161616] mb-[0.9em]'>Sorry, the page you were looking for was not found.</h2>
      <Link className='bg-[#161616] block rounded-[5px] text-[#FFFFFF] text-[1.125rem] py-[0.8em] text-center' href="/">Return to home</Link>
    </div>
  )
}