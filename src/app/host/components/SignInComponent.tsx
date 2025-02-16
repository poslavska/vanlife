import { SignInButton } from "@clerk/nextjs";

export default function SignInComponent() {
  return (
    <section className='flex flex-col mx-auto font-bold pt-[2.5em] px-[1.625em] min-[600px]:px-[4em] max-w-[550px] gap-[3.25em]'>
      <h2 className='text-[1.625rem] sm:text-[2rem] text-[#161616]'>Sign in or create an account to see this page.</h2>
      <SignInButton mode="modal">
        <button className='bg-[#FF8C38] py-[1em] sm:py-[1em] rounded-[6px] text-center text-4 sm:text-[1.15rem] text-white'>Sign in</button>
      </SignInButton>
    </section>
  )
}