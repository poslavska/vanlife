import Image from "next/image"
import Link from "next/link"

interface VanProps {
  id: number,
  name: string,
  image: string,
  price: number,
  editButton?: boolean
}

export default function ListedVan({id, name, image, price, editButton = false}: VanProps) {
  const mainContent = <div className="flex justify-between max-w-[430px] min-[925px]:w-[410px] bg-[#FFFFFF] rounded-[6px] py-[1.125em] pl-[1.5em] pr-[1.6875em]">
    <div className="flex items-center gap-[1.25em]">
      <Image src={image} className="w-[65px] h-[65px] rounded-[5px]" width={65} height={65} alt={`Image of the '${name}' van`} />
      <div className="flex flex-col leading-[1.98125rem]">
        <p className="text-[1rem] min-[500px]:text-[1.25rem] leading-[1.25rem] font-semibold min-[500px]:mb-[0.25em]">{name}</p>
        <p className="text-[#4D4D4D] text-[1rem] font-medium">${price}/day</p>
      </div>
    </div>
    {editButton && <p className="self-center font-medium text-[1rem]">Edit</p>}
  </div>
  
  return (
    <>
      {editButton ? <Link href={`/host/vans/${id}`}>{mainContent}</Link> : mainContent}
    </>
  )
}