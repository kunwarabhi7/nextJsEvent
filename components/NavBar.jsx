import React from 'react'
import Link from 'next/link'


const NavBar = () => {
  return (
  
    <header className="text-gray-600 body-font bg-cyan-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center cursor-pointer text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl cursor-pointer">Next Events</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/events' className="mr-5 text-white">Browse All events</Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar