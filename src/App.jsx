import { useEffect, useState } from 'react'
import ManImage from './assets/images/man.png'
import BriefcaseIcon from './assets/icons/briefcase.svg'
import ToolsIcon from './assets/icons/tools.svg'
import laptopCodeIcon from './assets/icons/laptop-code.svg'
import DatabaseJSON from './assets/data/database.json'
import DetailPortofolio from './components/DetailPortofolio'

const App = () => {
  const [projects, setProjects] = useState([]);
  const [tools, setTools] = useState([]);

  const [show, setShow] = useState(false);
  const [portofolio, setPortofolio] = useState(1);

  const getDatabase = async () => {
    setProjects(DatabaseJSON.projects);
    setTools(DatabaseJSON.tools);
  }

  const handleShow = (id) => {
    setPortofolio(id);
    setShow(true);
  }

  useEffect(() => {
    getDatabase();
  }, []);
  return (
    <main>
      <section className="flex flex-col justify-center items-center bg-slate-950 h-screen">
        <header className='flex flex-col justify-center items-center gap-5'>
          <img loading="lazy" src={ManImage} alt="Lerian Febriana, A.Md.Kom" className='w-32 h-32' />
          <div className='flex flex-col justify-center gap-2 text-center'>
            <h1 className='text-white font-bold text-xl'>Lerian Febriana, A.Md.Kom</h1>
            <p className='text-gray-200 text-sm'>Orangnya suka ngulik, suka penghijauan. Pengen jadi ahli IT 👋🏼</p>
            <p className='text-gray-200 text-sm'>@kanglerian . Indonesian 🇮🇩 . Software Engineer . Anak IT</p>
          </div>
          <section className='flex flex-wrap justify-center items-center gap-2'>
            <a href="https://instagram.com/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2'><i className="fa-brands fa-instagram"></i> Instagram</a>
            <a href="https://github.com/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2'><i className="fa-brands fa-github"></i> Github</a>
            <a href="https://youtube.com/c/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2'><i className="fa-brands fa-youtube"></i> Youtube</a>
          </section>
        </header>
      </section>
      <section className='bg-slate-900'>
        <div className='container mx-auto space-y-10 px-10 py-10 md:px-5'>
          {
            tools.length > 0 ? (
              <div className='flex flex-wrap justify-center items-center gap-8'>
                {
                  tools.map((tool, key) =>
                    <div className='text-gray-300' key={key}>
                      <i className={`fa-brands ${tool.name} fa-4x`}></i>
                    </div>
                  )
                }
              </div>
            ) : (
              <p className='text-gray-300 text-center text-sm'>No tools yet.</p>
            )
          }
        </div>
      </section>
      <section className='bg-slate-950'>
        <div className='container mx-auto space-y-10 px-10 py-10 md:px-5'>
          <header className='text-center'>
            <h2 className='flex justify-center items-center gap-3 text-2xl font-bold'>
              <img loading="lazy" src={laptopCodeIcon} alt="" className='w-7 h-7' />
              <span className='text-white'>Portofolio Project</span>
            </h2>
          </header>
          <DetailPortofolio content={portofolio} />
          {
            projects.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                  projects.map((project, key) =>
                    <div key={key}>
                      <div className='bg-sky-600 h-52'></div>
                      <div className='flex justify-between items-center bg-sky-900 px-5 py-3'>
                        <button type='button' onClick={() => handleShow(project.id)} className='text-white hover:text-sky-200 text-sm'>{project.name}</button>
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
        </div>
      </section>
      <footer className='py-3 bg-slate-900'>
        <p className='text-xs text-center text-gray-300'>Copyright © 2024 Lerian Febriana 🇮🇩</p>
      </footer>
    </main>
  )
}

export default App