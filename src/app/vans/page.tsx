import { getAllVans } from '@/actions/van.action'
import { Metadata } from 'next'
import VanList from './components/VanList'

export const metadata: Metadata = {
  title: 'Vans',
  description: 'Choose your perfect van from our Vans listing page'
}

export default async function VansPage() {
  const vans = await getAllVans()

  return <VanList initialVans={vans} />
}