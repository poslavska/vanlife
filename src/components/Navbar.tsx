"use server"
import { syncUser } from '@/actions/user.action'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import NavLink from './NavLink'
import BurgerMenu from './BurgerMenu'
import Link from 'next/link'

export default async function Navbar() {
  const user = await currentUser()
  if (user) await syncUser()
  return (
    <nav className='py-[2.25em] px-[1.625em] min-[600px]:px-[4em] flex justify-between items-center'>
      <Link href="/" className='font-[900] text-[1.5625rem] text-[#000000] '>#VANLIFE</Link>
      <div className='flex gap-[1.825em] min-[490px]:gap-[0.8125em] min-[500px]:gap-[2em] text-[#4D4D4D] font-semibold text-[1rem] min-[550px]:text-[1.125rem]'>
        <div className='hidden min-[490px]:flex gap-[1.75em]'>
          <NavLink name="Host" path="/host"/>
          <NavLink name="About" path="/about"/>
          <NavLink name="Vans" path="/vans"/>
        </div>

        {user ? <UserButton /> 
          : 
        <SignInButton mode="modal">
          <button className='bg-[#FF8C38] font-bold px-[0.56em] py-[0.23em] rounded-[5px] text-center text-[1rem] text-white'>Sign in</button>
        </SignInButton>
        }

        <BurgerMenu />
      </div>
    </nav>
  )
}