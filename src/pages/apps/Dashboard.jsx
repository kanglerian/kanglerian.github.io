import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeImage from '../../assets/dreams/home.jpeg'
import MacbookImage from '../../assets/dreams/macbook.jpeg'
import AdvImage from '../../assets/dreams/adv.jpeg'
import UTImage from '../../assets/dreams/ut.jpeg'
import IOUImage from '../../assets/dreams/iou.webp'
import DatsunImage from '../../assets/dreams/datsun.jpeg'
import DurushulImage from '../../assets/dreams/durushul.jpeg'
import ShopImage from '../../assets/dreams/shop.webp'
import DeskImage from '../../assets/dreams/desk.webp'

const Dashboard = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(false);

  const getSession = () => {
    const lrnkey = localStorage.getItem('lrnkey');
    if (lrnkey) {
      setSession(true)
    } else {
      const key = prompt('Input Password:');
      if (key == 411566) {
        localStorage.setItem('lrnkey', true);
      } else {
        alert('Wrong password!');
        navigate('/');
      }
    }
  }

  const closeSession = () => {
    localStorage.removeItem('lrnkey');
    setSession(false);
    navigate('/');
  }

  useEffect(() => {
    getSession();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center gap-10 bg-black pt-20">
      <nav className='container mx-auto flex justify-center items-center px-10 md:px-5'>
        <Link to={`/`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>
      </nav>
      {session &&
        <section className='container mx-auto px-10 md:px-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${HomeImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>Rumah Sendiri di Cisayong</span>
                <span>2024</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${DurushulImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>Bahasa Arab & Tajwid</span>
                <span>2024</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${ShopImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>Online Shop IT & Game</span>
                <span>2024</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${UTImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>UT S.Si (Sistem Informasi)</span>
                <span>2024</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${DeskImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>Private Workshop</span>
                <span>2024</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${MacbookImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>Macbook Pro 13" M1 2020</span>
                <span>2025</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${AdvImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>Honda ADV 160</span>
                <span>2025</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${IOUImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>IOU BA (Islamic Studies)</span>
                <span>2025</span>
              </div>
            </div>
            <div>
              <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${DatsunImage})` }}></div>
              <div className='flex items-center justify-between bg-white px-5 py-3 text-sm'>
                <span>Datsun GO</span>
                <span>2025</span>
              </div>
            </div>
          </div>
        </section>
      }
      <footer className='pb-5'>
        <p className='text-gray-400 text-xs'>Copyright © 2024 Lerian Febriana, A.Md.Kom</p>
      </footer>
    </main>
  )
}

export default Dashboard