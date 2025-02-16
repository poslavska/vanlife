"use client"
import BackToAllVans from '@/components/BackToAllVans'
import { notFound, useRouter } from 'next/navigation'
import VanForm from '../components/VanForm'
import { use, useEffect, useState } from 'react'
import { Van } from '@prisma/client'
import SkeletonVanForm from '../components/SkeletonVanForm'

export default function ListedVanPage({ params }: { params: Promise<{ id: number }> }) {
  const router = useRouter()
  const unwrappedParams = use(params)
  const [van, setVan] = useState<Van | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchVan() {
      const res = await fetch(`/api/vans/${unwrappedParams.id}`)
      if (!res.ok) {
        router.push("/404")
        return
      }
      const data = await res.json()
      setVan(data)
      setLoading(false)
    }

    fetchVan()
  }, [unwrappedParams.id, router])

  if (loading) return (
    <section className='flex flex-col px-[1.625em] min-[600px]:px-[4em] mt-2 sm:mt-3 mb-[3.75em]'>
      <SkeletonVanForm />
    </section>
  )
  if (!van) notFound()
  
  return (
    <section className='flex flex-col px-[1.625em] min-[600px]:px-[4em] mt-2 sm:mt-3 mb-[3.75em]'>
      <BackToAllVans location='/host/vans' />
      <VanForm van={van} />
    </section>
  )
}