"use client"
import { filterVansByType, getAllVans } from '@/actions/van.action';
import React, { useState } from 'react'
import Link from 'next/link';
import Van from './Van';
import VanType from './VanType';
import SkeletonVans from './SkeletonVans';

type VansProps = Awaited<ReturnType<typeof getAllVans>>;

export default function VanList({initialVans} : {initialVans:VansProps}) {
  const [filterOn, setFilterOn] = useState(false)
  const [isLoadingFilter, setIsLoadingFilter] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [filteredVans, setFilteredVans] = useState<VansProps>([])
  const finalVans = filterOn ? filteredVans : initialVans
  const vansElements = finalVans.map(van => {
    return <Van key={van.id}
      id={van.id}
      name={van.name}
      image={van.image}
      price={van.price}
      type={van.type} />
    })
  
  const handleFilter = async (name: string) => {
    try {
      setFilterOn(true)
      setIsLoadingFilter(true)
      setSelectedFilter(name)
      setFilteredVans([])
      setFilteredVans(await filterVansByType(name.toLowerCase()))
    } catch (error) {
      console.log("Failed to filter vans")
    }
    finally {
      setIsLoadingFilter(false)
    }
  }

  const clearFilters = () => {
    setFilterOn(false)
    setFilteredVans([])
    setSelectedFilter(null)
  }

  return (
    <section className='flex flex-col px-[1.625em] min-[600px]:px-[4em] pt-[1em] min-[500px]:pt-[1.5em] text-[#161616]'>
      {(vansElements.length > 0 || filterOn) ? (
        <>
          <p className='font-bold text-[1.625rem] min-[500px]:text-[2rem]'>Explore our van options</p>
          <div className='flex flex-wrap gap-[1.25em] font-medium pt-[1.375em]'>
            <VanType selectedFilter={selectedFilter}
              handleFilter={handleFilter}
              name="Simple" />
            <VanType selectedFilter={selectedFilter}
              handleFilter={handleFilter}
              name="Luxury" />
            <VanType selectedFilter={selectedFilter}
              handleFilter={handleFilter}
              name="Rugged" />
            <button onClick={clearFilters} className='text-[1rem] text-[#4D4D4D] leading-[1.4375rem] underline font-medium'>Clear filters</button>
          </div>
        </>
      ) : null}
      <div className='flex flex-wrap justify-center min-[525px]:justify-around gap-[2.0625em] min-[900px]:gap-[2.75em] min-[525px]:gap-y-[3.5em] pt-[2.75em] pb-[4.875em] max-w-[1100px] min-[700px]:mx-auto'>
        {isLoadingFilter ? <SkeletonVans />
        : vansElements.length > 0 ? vansElements
        : filterOn ? (
          <p className='text-[1.75rem] mt-[1.78em] font-bold min-[500px]:text-[2.25rem] mb-[0.9375em]'>Sorry, there are no vans of this type available right now.</p>
        ) : (
          <div className='flex flex-col font-bold mt-[3.125em]'>
            <p className='text-[1.75rem] min-[500px]:text-[2.25rem] mb-[0.9375em]'>Sorry, there are no vans available right now.</p>
            <Link href="/" 
            className='bg-[#161616] text-center rounded-[5px] text-[#FFFFFF] text-[1rem] min-[500px]:text-[1.125rem] py-[0.77em]'>
            Return to home</Link>
          </div>
        )}
      </div>
    </section>
  )
}