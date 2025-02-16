import { getVanById } from '@/actions/van.action'
import BackToAllVans from '@/components/BackToAllVans'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateMetadata(props: {params: Promise<{id: number}>}) {
  const params = await props.params;
  const van = await getVanById(Number(params.id))
  if (!van) return
  return {
    title: van.name,
    description: `Check out the ${van.name} van on this page!`
  }
}

export default async function VanPage(props: {params: Promise<{id: number}>}) {
  const params = await props.params;
  const van = await getVanById(Number(params.id))
  if (!van) notFound()
  let typeColor = ""
  switch (van.type){
    case "simple":
      typeColor = 'bg-[#E17654]'
      break
    case "luxury":
      typeColor = 'bg-[#161616]'
      break
    case "rugged":
      typeColor = 'bg-[#115E59]'
      break
  }

  return (
    <section className='flex flex-col px-[1.625em] min-[600px]:px-[4em] text-[#161616] mt-[0.625em] mb-[3em]'>
      <BackToAllVans location='/vans' />
      <div className='flex flex-col min-[977px]:flex-row max-w-[1100px] min-[977px]:gap-[2.5em]'>
        <Image src={van.image} width={430} height={430} className='rounded-[5px] mb-[3.125em] min-[977px]:mb-0' alt={`Image of the '${van.name}' van`}/>
        <div className='flex flex-col'>
          <p className={`self-start px-[0.8125em] py-[0.25em] mb-[1.25em] text-[1rem] rounded-[5px] font-semibold text-[#FFEAD0] ${typeColor}`}>{van.type.charAt(0).toUpperCase()
+ van.type.slice(1)}</p>
          <p className='text-[2rem] font-bold mb-[0.28125em]'>{van.name}</p>
          <p className='text-[1.5rem] font-bold leading-[2.75rem] mb-[0.375em]'>${van.price} <span className='text-[1.25rem] font-medium'>/day</span></p>
          <p className='font-medium text-[1rem] mb-[2em] max-w-[780px]'>{van.description}</p>
          <p className='font-bold text-[1.375rem] underline underline-offset-[3px]'>{van.contact}</p>
        </div>
      </div>
    </section>
  )
}