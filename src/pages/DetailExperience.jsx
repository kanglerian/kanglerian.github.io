import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BriefcaseIcon from '../assets/icons/briefcase.svg'
import ToolsIcon from '../assets/icons/tools.svg'
import laptopCodeIcon from '../assets/icons/laptop-code.svg'
import DatabaseJSON from '../assets/data/database.json'

const DetailExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);

  const getDatabase = async () => {
    setExperiences(DatabaseJSON.experiences);
    setProjects(DatabaseJSON.projects);
    setTools(DatabaseJSON.tools);
  }

  useEffect(() => {
    getDatabase();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center gap-20 bg-black pt-20">
      <nav className='container mx-auto flex justify-between items-center px-10 md:px-5'>
        <Link to={`/`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>
        <Link to={`/education`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <span>Educations</span>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </nav>
      <section className='container mx-auto space-y-10 px-10 md:px-5'>
        <header className='text-center'>
          <h2 className='flex justify-center items-center gap-3 text-2xl font-bold'>
            <img loading="lazy" src={BriefcaseIcon} alt="" className='w-5 h-5' />
            <span className='text-white'>Experience</span>
          </h2>
        </header>
        {
          experiences.length > 0 ? (
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                experiences.map((experience, key) =>
                  <p key={key} className='text-gray-300 text-center space-x-2'>
                    <i className="fa-regular fa-circle-check text-green-500"></i>
                    <span className='font-medium'>{experience.title}</span><br />
                    <span className='text-sm'>({experience.company})</span>
                  </p>
                )
              }
            </div>
          ) : (
            <p className='text-gray-300 text-center text-sm'>No experience yet.</p>
          )
        }
      </section>
      <section className='container mx-auto space-y-10 px-10 md:px-5'>
        <header className='text-center'>
          <h2 className='flex justify-center items-center gap-3 text-2xl font-bold'>
            <img loading="lazy" src={ToolsIcon} alt="" className='w-5 h-5' />
            <span className='text-white'>Tools</span>
          </h2>
        </header>
        {
          tools.length > 0 ? (
            <div className='flex flex-wrap justify-center items-center gap-8'>
              {
                tools.map((tool, key) =>
                  <div className='text-gray-300' key={key}>
                    <i className={`fa-brands ${tool.name} fa-5x`}></i>
                  </div>
                )
              }
            </div>
          ) : (
            <p className='text-gray-300 text-center text-sm'>No tools yet.</p>
          )
        }
      </section>
      <section className='container mx-auto space-y-10 px-10 md:px-5'>
        <header className='text-center'>
          <h2 className='flex justify-center items-center gap-3 text-2xl font-bold'>
            <img loading="lazy" src={laptopCodeIcon} alt="" className='w-5 h-5' />
            <span className='text-white'>Projects</span>
          </h2>
        </header>
        {
          projects.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
              {
                projects.map((project, key) =>
                  <div key={key}>
                    <div className='bg-sky-600 h-52'></div>
                    <div className='flex justify-between items-center bg-sky-900 px-5 py-3'>
                      <Link to={`/`} className='text-white hover:text-sky-200 text-sm'>{project.name}</Link>
                      <div className='text-sky-200 space-x-2'>
                        {
                          project.icons.map((icon, key) =>
                            <i key={key} className={`fa-brands ${icon.icon}`}></i>
                          )
                        }
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          ) : (
            <p className='text-gray-300 text-center text-sm'>No project yet.</p>
          )
        }
      </section>
      <footer className='pb-5'>
        <p className='text-gray-400 text-xs'>Copyright © 2024 Lerian Febriana, A.Md.Kom</p>
      </footer>
    </main>
  )
}

export default DetailExperience