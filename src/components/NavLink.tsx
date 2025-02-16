'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavlinkProps {
  path: string, 
  name: string,
  closeMenu?: () => void
}

export default function NavLink({path, name, closeMenu}: NavlinkProps) {
  const pathname = usePathname()
  const isActive = path === "/host"  ? pathname.startsWith("/host") : pathname.startsWith(path)
  return (
    <Link className={`${isActive ? 'underline underline-offset-4' : ''}`} href={path} onClick={closeMenu}>
      {name}
    </Link>
  )
}

