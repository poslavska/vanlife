"use client"
import React, { useState } from 'react'
import VanForm from '../components/VanForm'
import BackToAllVans from '@/components/BackToAllVans'

export default function NewVanForm() {
  const [isCreateVan, setIsCreateVan] = useState(true)
  return (
    <section className='flex flex-col px-[1.625em] min-[600px]:px-[4em] mt-2 sm:mt-3 mb-[3.75em]'>
      <BackToAllVans location='/host/vans' />
      <VanForm isCreateVan={isCreateVan} />
    </section>
  )
}