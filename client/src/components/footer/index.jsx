import React from 'react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (  
    <footer className="border-t-2 border-black/10 rounded-md w-11/12">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2023 All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            {/* <li>
                <Link to="/" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
                <Link to="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/" className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
                <Link to="/" className="hover:underline">Contact</Link>
            </li> */}
        </ul>
        </div>
    </footer> 
  )
}

export default AppFooter
