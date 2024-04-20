import Laptop from '../assets/laptop.jpg'
import { useAuth0 } from '@auth0/auth0-react'

const Analytics = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ANALYZE YOUR IMAGES</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Upload your images for in-depth analysis.
          </h1>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Think you've got an eye for detail? <br /> Upload your images and
            see if you can outsmart the algorithms.
            <br /> SECURENET will analyze your photos, revealing any hidden
            manipulations and helping you become a master of image verification.
          </p>
          <div className='flex justify-center'>
            {isAuthenticated ? (
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                Choose Files
              </button>
            ) : (
              <button
                className='p-4 bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'
                onClick={() => loginWithRedirect()}
              >
                Login to upload files
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
