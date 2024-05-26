import React from 'react'
import { Link } from 'react-router-dom'
import ManImage from '../assets/images/man.png'

const Profile = () => {

  return (
    <main className="flex flex-col justify-center items-center bg-black h-screen">
      <header className='flex flex-col justify-center items-center gap-5'>
        <img loading="lazy" src={ManImage} alt="Lerian Febriana, A.Md.Kom" className='w-32 h-32' />
        <div className='flex flex-col justify-center gap-2 text-center'>
          <h1 className='text-white font-bold text-xl'>Lerian Febriana, A.Md.Kom</h1>
          <p className='text-gray-200 text-sm'>Orangnya suka ngulik, suka penghijauan. Pengen jadi ahli IT 👋🏼</p>
          <p className='text-gray-200 text-sm'>@kanglerian . Indonesian 🇮🇩 . Full Stack Developer . Anak IT</p>
          <Link to={`/experience`} className='text-white hover:text-sky-400 text-sm underline space-x-2'>
            <span className='inline-block'>More Profile</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </div>
        <section className='flex flex-wrap justify-center items-center gap-2'>
          <Link to={`/productive`} className='text-white hover:text-sky-400 text-sm underline'>Productive</Link>
          <Link to={`/dashboard`} className='text-white hover:text-sky-400 text-sm underline'>Dashboard</Link>
          <Link to={`/courses`} className='text-white hover:text-sky-400 text-sm underline'>Courses</Link>
        </section>
        <section className='flex flex-wrap justify-center items-center gap-2'>
          <a href="https://instagram.com/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2'><i className="fa-brands fa-instagram"></i> Instagram</a>
          <a href="https://github.com/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2'><i className="fa-brands fa-github"></i> Github</a>
        </section>
      </header>
    </main>
  )
}

export default Profile;
