import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import NotfoundAnimation from '../assets/animations/notfound.json'

const NotFound = () => {
  return (
    <main className='flex flex-col justify-center items-center bg-gray-100 h-screen gap-10'>
      <div className='max-w-4xl flex flex-col justify-center items-center gap-5'>
        <Lottie animationData={NotfoundAnimation} className='w-64 h-64' loop={true} />
        <div className="text-center space-y-3">
          <h2 className="font-bold text-2xl">Under Maintenance</h2>
          <p className="text-gray-600 text-sm">We apologize for the inconvenience. Currently, we are undertaking enhancements and improvements on our website to provide a better experience for our visitors. We hope to reintroduce full and functional services shortly. Thank you for your patience and understanding.</p>
        </div>
        <Link to={`/`} className="inline-block text-sm bg-gray-100 text-gray-900 px-3 py-1 rounded-lg"><i className="fa-solid fa-circle-chevron-left"></i> Back</Link>
      </div>
    </main>
  )
}

export default NotFound