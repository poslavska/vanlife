"use client"
import React, { useEffect, useState } from 'react'
import NavLink from './NavLink'

export default function BurgerMenu() {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [burgerOpen, setBurgerOpen] = useState(false)

  const closeMenu = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      setBurgerOpen(false)
      setIsFadingOut(false)
    }, 1100)
  }

  useEffect(() => {
    if (burgerOpen) {
      document.body.style.overflow = "hidden" // Disable scrolling while burgermenu is open
    } else {
      document.body.style.overflow = "" // Restore scrolling
    }
    return () => {
      document.body.style.overflow = "" // Cleanup when component unmounts
    }
  }, [burgerOpen])

  return (
    <>
      <button onClick={() => setBurgerOpen(prev => !prev)} className='flex min-[490px]:hidden items-center justify-center z-10' aria-expanded={burgerOpen} aria-label={burgerOpen ? "Close menu" : "Open menu"}>
        <div className='w-5 h-[2px] bg-[#161616]
        before:block before:content-[" "] before:absolute before:w-5 before:h-[2px] before:bg-[#161616] before:-translate-y-[7px]
        after:block after:content-[" "] after:absolute after:w-5 after:h-[2px] after:bg-[#161616] after:translate-y-[7px]'>
        </div>
      </button>
      {burgerOpen &&
        <div className={`fixed top-[5.5em] left-0 right-0 h-full flex flex-col items-center gap-[1.75em] w-full text-foreground text-[1.125rem] bg-background z-[999]
        transition-opacity duration-1100 ease-linear ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
          <span className='block w-full h-[2.5px] bg-[#575757]'></span>
          <NavLink name="Host" path="/host" closeMenu={closeMenu} />
          <NavLink name="About" path="/about" closeMenu={closeMenu} />
          <NavLink name="Vans" path="/vans" closeMenu={closeMenu} />
        </div>
      }
    </>
  )
}