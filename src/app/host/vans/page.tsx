import { currentUser } from '@clerk/nextjs/server'
import SignInComponent from '../components/SignInComponent'
import { getUserVans } from '@/actions/van.action'
import ListedVan from '../dashboard/components/ListedVan'
import NewVanCard from './components/NewVanCard'

export default async function HostVans() {
  const vans = await getUserVans()
  let vanElements = null
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
        editButton={true}
      />
    })
  }

  return (
    <section className='flex flex-col px-[1.625em] min-[600px]:px-[4em] mb-[3.75em]'>
      <h2 className='font-bold text-[1.5rem] py-[1em]'>Your listed vans</h2>
        <div className='flex flex-col min-[925px]:flex-row min-[925px]:flex-wrap gap-[1.5em]'>
          <NewVanCard />
          {vans.length > 0 && vanElements}
        </div>
    </section>
  )
}