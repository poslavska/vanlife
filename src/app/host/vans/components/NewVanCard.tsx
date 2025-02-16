import Link from "next/link"

export default function NewVanCard() {
  return (
    <Link href="/host/vans/new"
      className="flex flex-col cursor-pointer items-center justify-center max-w-[430px] min-[925px]:w-[410px] bg-[#FFFFFF] rounded-[6px] gap-[0.625em] py-[1.3125em] min-[500px]:py-[0.825em] pl-[1.5em] pr-[1.6875em]">
      <button className='text-[#a6a6a6] leading-[1.5rem] min-[500px]:leading-[2.3125rem] text-[3rem] min-[500px]:text-[3.5rem]'>+</button>
      <p className="text-[1rem] min-[500px]:text-[1.15rem] font-medium">Create new van</p>
    </Link>
  )
}