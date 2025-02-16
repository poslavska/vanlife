interface TypeProps {
  name: string,
  selectedFilter: string | null,
  handleFilter: (name: string) => Promise<void>
}

export default function VanType({name, selectedFilter, handleFilter}: TypeProps) {
  let colors = ""
  let hoverBgColor = ""
  let isActive = selectedFilter?.toLowerCase() === name.toLowerCase()

  switch (name.toLowerCase()){
    case "simple":
      hoverBgColor = 'hover:bg-[#E17654]'
      colors = `${isActive ? 'bg-[#E17654] text-[#FFEAD0]' : "bg-[#FFEAD0] text-[#4D4D4D]"}`
      break
    case "luxury":
      hoverBgColor = 'hover:bg-[#161616]'
      colors = `${isActive ? 'bg-[#161616] text-[#FFEAD0]': "bg-[#FFEAD0] text-[#4D4D4D]"}`
      break
    case "rugged":
      hoverBgColor = 'hover:bg-[#115E59]'
      colors = `${isActive ? 'bg-[#115E59] text-[#FFEAD0]': "bg-[#FFEAD0] text-[#4D4D4D]"}`
      break
  }
  return (
    <button onClick={() => handleFilter(name)} className={`${colors} hover:text-[#FFEAD0] ${hoverBgColor} font-medium text-[1rem] leading-[1.4375rem] px-[1em] py-[0.375em] min-[442px]:px-[1.625em] rounded-[5px]`}>
      {name}
    </button>
  )
}