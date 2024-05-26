import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import DiplomaIcon from '../assets/icons/diploma.svg'
import EducationAnimation from '../assets/animations/education.json'

const DetailEducation = () => {
  return (
    <main className="flex flex-col justify-between items-center h-screen gap-20 bg-black pt-20">
      <nav className='container mx-auto flex justify-between items-center px-10 md:px-5'>
        <Link to={`/experience`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>
      </nav>
      <section className='container mx-auto px-10 md:px-5'>
        <div className="flex flex-col md:flex-row items-end md:items-start justify-between">
          <div className='space-y-5'>
            <div className='space-y-3'>
              <h2 className='flex items-center gap-3 text-2xl font-bold'>
                <img loading="lazy" src={DiplomaIcon} alt="" className='w-5 h-5' />
                <span className='text-white'>Education</span>
              </h2>
              <p className='text-gray-300 text-sm'>
              "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
              </p>
            </div>
            <ul className='list-disc space-y-1 ml-5'>
              <li className='text-gray-200'>Politeknik LP3I . (A.Md.Kom) D3 Manajemen Informatika</li>
              <li className='text-gray-200'>SMK Manangga Pratama . Teknik Kendaran Ringan</li>
              <li className='text-gray-200'>SMP Negeri 6 Kota Tasikmalaya</li>
              <li className='text-gray-200'>SD Negeri Gunung Pereng 4 Kota Tasikmalaya</li>
              {/* <li className='text-red-500'>International Open University . (BSc) Bachelor of Science IT (<span className='italic'>InsyaAllah</span>)</li>
              <li className='text-red-500'>International Open University . (BA) Bachelor of Arts Islamic Studies (<span className='italic'>InsyaAllah</span>)</li>
              <li className='text-red-500'>Universitas Terbuka . (S.SI.) S1 Sistem Informasi (<span className='italic'>InsyaAllah</span>)</li> */}
            </ul>
          </div>
          <div className='flex justify-end items-center'>
            <Lottie animationData={EducationAnimation} className='w-64 h-64' loop={true} />
          </div>
        </div>
      </section>
      <footer className='pb-5'>
        <p className='text-gray-400 text-xs'>Copyright © 2024 Lerian Febriana, A.Md.Kom</p>
      </footer>
    </main>
  )
}

export default DetailEducation