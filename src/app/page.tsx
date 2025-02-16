import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VanLife',
  description: 'Add adventure to your life and rent the perfect van for your road trip.',
}

export default function Main() {
  return (
    <section className='text-[#FFFFFF] bg-[url(/main.svg)] px-[1.625em] py-[4.0625em] bg-cover'>
      <div className='max-w-[730px] mx-auto'>
        <p className='font-extrabold leading-[2.625rem] text-[2.25rem] mb-[0.61em]'>You got the travel plans, we got the travel vans.</p>
        <p className='font-medium text-[1rem] mb-[3.1875em]'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link 
        href="/vans"
        className='block bg-[#FF8C38] font-bold py-[0.75em] rounded-[5px] text-center text-[1rem] text-white'
        >
          Find your van</Link>
      </div>
    </section>
  )
}