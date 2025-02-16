"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HostNavbar() {
  const pathname = usePathname()
  return (
  <nav className='flex text-[1.125rem] gap-[1.61em] text-[#161616] font-bold px-[1.44em] min-[600px]:px-[3.55em] pt-[1.25em] pb-[1.8em]'>
    <Link className={`${pathname === '/host/dashboard' ? 'underline underline-offset-4' : ''}`} href="/host/dashboard">Dashboard</Link>
    <Link className={`${pathname.startsWith('/host/vans') ? 'underline underline-offset-4' : ''}`} href="/host/vans">Vans</Link>
  </nav>
  )
}