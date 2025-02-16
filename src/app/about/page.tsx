import { Metadata } from 'next';
import vanlifeAbout from '../../../public/about.svg'
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about the mission of VanLife'
}

function AboutPage() {
  return (
    <section className='text-[#161616]'>
      <Image 
        src={vanlifeAbout} 
        alt='Man sitting on top of van'
        className='text-center min-[500px]:mx-auto'
      />
      <div className='px-[1.625em] pt-[3em] pb-[3.3125em] max-w-[970px] mx-auto'>
        <p className='font-bold leading-[2.15rem] min-[500px]:leading-[2.375rem] text-[1.5rem] min-[500px]:text-[2rem] mb-[1em]'>Don’t squeeze in a sedan when you could relax in a van.</p>
        <p className='font-medium text-[1rem] mb-[1em]'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. 
          <br/>(Hitch costs extra 😉)</p>
        <p className='font-medium text-[1rem]'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <div className='bg-[#FFCC8D] mx-auto max-w-[560px] rounded-[5px] px-[2.375em] py-[2em] mt-[3em] min-[500px]:mt-[3.4375em]'>
          <p className='font-bold text-[1.375rem] min-[500px]:text-[1.5rem] leading-[1.875rem]'>Your destination is waiting. <br /> Your van is ready.</p>
          <Link 
            href="/vans" 
            className='inline-block text-[#FFFFFF] hover:text-[#161616] font-bold text-[1rem] bg-[#161616] hover:bg-transparent border-transparent border-2 box-border hover:border-current px-[calc(1.375em-2px)] py-[calc(0.875em-2px)] rounded-[10px] mt-[1.5625em]'>
          Explore our vans</Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPage