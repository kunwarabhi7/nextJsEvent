import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
  
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Next Events</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href='/events' className="mr-5 hover:text-gray-900">Browse All events</Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar