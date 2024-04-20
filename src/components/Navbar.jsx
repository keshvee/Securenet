import { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'
const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className=' text-3xl font-bold text-[#00df9a]'>SECURENET</h1>
      <ul className='hidden md:flex'>
        <button className='p-4'>
          <Link to='heroSections' smooth={true}>
            Home
          </Link>
        </button>
        <button className='p-4'>
          <Link to='analyticsSection' smooth={true}>
            About
          </Link>
        </button>
        <button className='p-4'>
          <Link to='footerSection' smooth={true}>
            Contact
          </Link>
        </button>
        {isAuthenticated && (
          <li className='p-4'>
            <h2> {user.name} </h2>
          </li>
        )}
        {isAuthenticated ? (
          <button
            className='p-4'
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        ) : (
          <button className='p-4' onClick={() => loginWithRedirect()}>
            Login
          </button>
        )}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
          SECURENET
        </h1>
        <button className='p-4 border-b border-gray-600'>Home</button>
        <button className='p-4 border-b border-gray-600'>About</button>
        <button className='p-4 border-b border-gray-600'>Contact</button>
        {isAuthenticated && (
          <li className='p-4'>
            <h2> {user.name} </h2>
          </li>
        )}
        {isAuthenticated ? (
          <button
            className='p-4 border-b border-gray-600'
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </button>
        ) : (
          <button className='p-4 border-b border-gray-600' onClick={() => loginWithRedirect()}>
            Login
          </button>
        )}
      </ul>
    </div>
  )
}

export default Navbar
