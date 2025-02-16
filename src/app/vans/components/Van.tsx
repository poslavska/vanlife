import Image from 'next/image'
import Link from 'next/link'

interface VanProps {
  id: number,
  name: string,
  image: string,
  price: number,
  type: string
}

export default function Van({id, name, image, price, type}: VanProps) {
  let typeColor = ""
  switch (type){
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
    <div className='flex flex-col max-w-[220px]'>
      <Link href={`/vans/${id}`}>
          <Image src={image} width={220} height={220} className='rounded-[5px]' alt={`Image of the '${name}' van`}/>
      </Link>
      <div className='flex justify-between pt-[0.5em]'>
        <p className='text-[1.25rem] font-semibold'>{name}</p>
        <div className='flex flex-col'>
          <p className='text-[1.25rem] font-semibold'>${price}</p>
          <span className='text-[0.875rem] font-medium self-end'>/day</span>
        </div>
      </div>
      <p className={`self-start px-[0.8125em] py-[0.3125em] text-[1rem] rounded-[5px] font-semibold text-[#FFEAD0] ${typeColor}`}>{type.charAt(0).toUpperCase()
+ type.slice(1)}</p>
    </div>
  )
}