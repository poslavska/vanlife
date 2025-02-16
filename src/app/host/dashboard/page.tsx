import { getDbUsername } from '@/actions/user.action'
import { getUserVans } from '@/actions/van.action'
import ListedVan from '@/app/host/dashboard/components/ListedVan'
import { currentUser } from '@clerk/nextjs/server'
import SignInComponent from '../components/SignInComponent'
import Link from 'next/link'

export default async function DashboardPage() {
  const vans = await getUserVans()
  let vanElements = null
  const username = await getDbUsername()
  const user = await currentUser()
  if (!user) {
    return <SignInComponent />
  }

  if (vans.length > 0) {
    vanElements = vans.map(van => {
      return <ListedVan
        key={van.id}
        id={van.id}
        image={van.image}
        name={van.name}
        price={van.price}
      />
    })
  }
  
  return (
    <section className='flex flex-col text-[#161616]'>
      <div className='bg-[#FFEAD0]'>
        <h2 className='font-bold text-[1.5rem] px-[0.92em] min-[600px]:px-[2.6em] py-[1.15em]'>Welcome, {username?.username}!</h2>
      </div>
      <div className='flex flex-col px-[1.625em] min-[600px]:px-[4em] mt-[2em] min-[500px]:mt-[2.25em] mb-[3.125em]'>
        {vans.length > 0 ? 
        <>
          <p className='text-[1.375rem] font-medium mb-[0.81em]'>You have listed <span className='font-bold'>{vans.length}</span> van{vans.length > 0 && vans.length !== 1 ? 's' : ''}</p>
          <div className='flex flex-col min-[925px]:flex-row min-[925px]:flex-wrap gap-[1.5em]'>
            {vanElements}
          </div>
        </>
        : (
          <div className='flex flex-col items-center text-center pt-8 sm:pt-5'>
            <p className='text-[1.375rem] sm:text-[1.75rem] font-bold mb-[2em] sm:mb-[1.5em]'>You don't have any listed vans yet.</p>
            <p className='text-[1.25rem] sm:text-[1.625rem] font-medium mb-[0.75em]'>Ready to list your first van?</p>
            <Link href="/host/vans"
            className='bg-[#FF8C38] block font-bold rounded-[5px] text-[#FFFFFF] text-[1rem] sm:text-[1.125rem] px-[1.5em] sm:px-[2em] py-[0.5em] sm:py-[0.625em]'>Create a van</Link>
          </div>
        )}
      </div>
    </section>
  )
}