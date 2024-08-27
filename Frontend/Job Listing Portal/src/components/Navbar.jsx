import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary" },
    { path: "/job-listing", title: "Listing a Job" },
  ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href="/" className='flex items-center gap-2 text-2xl text-white'>
          <span>JobPortal</span>
        </a>

        {/* Nav items for large devices */}
        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-white'>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))
          }
        </ul>

        {/* signup and login button */}
        <div className='text-base text-crimption font-medium space-x-5 hidden lg:block'>
          <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
          <Link to="/sign-up" className='py-2 px-5 border rounded bg-RubyRed text-white'>Sign up</Link>
        </div>

        {/* small screen ---> mobile devices */}
        <div className='md:hidden block'>
          <button onClick={handleMenuToggle}>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className='w-5 h-5 text-primary' />
            }
          </button>
        </div>
      </nav>

      {/* navigation for mobiles */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {
            navItems.map(({ path, title }) => (
              <li key={path} className='text-base text-white first:text-white py-1'>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))
          }
          <li className='text-white py-1'><Link to="/login" >Log in</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
