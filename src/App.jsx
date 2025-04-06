import { useEffect, useState } from 'react'
import ManImage from './assets/images/man.png'
import BriefcaseIcon from './assets/icons/briefcase.svg'
import ToolsIcon from './assets/icons/tools.svg'
import laptopCodeIcon from './assets/icons/laptop-code.svg'
import DatabaseJSON from './assets/data/database.json'
import DetailPortofolio from './components/DetailPortofolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <main className='h-screen'>
      <section className="flex flex-col justify-center items-center bg-slate-950 h-screen">
        <header className='flex flex-col justify-center items-center gap-5'>
          <img id='profile' loading="lazy" src={ManImage} alt="Lerian Febriana" className='w-32 h-32' />
          <div className='max-w-xl flex flex-col justify-center gap-2 text-center px-5 md:px-0'>
            <h1 id='profile-name' className='text-white font-bold text-xl'>Lerian Febriana</h1>
            <p id='profile-desc' className='text-gray-200 text-sm'>🌿 Hi there! I&apos;m Lerian, a nature enthusiast and IT enthusiast from Indonesia. I&apos;m passionate about digging into tech and aiming to become an IT expert.<br/>Indonesian 🇮🇩</p>
          </div>
          <section className='flex flex-wrap justify-center items-center gap-2'>
            <a id='link-1' href="https://github.com/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2 space-x-1'>
              <FontAwesomeIcon icon="fa-brands fa-github" size='md' />
              <span>Github</span>
            </a>
            {/* <a id='link-2' href="https://youtube.com/c/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2 space-x-1'>
              <FontAwesomeIcon icon="fa-brands fa-youtube" size='md' />
              <span>Youtube</span>
            </a> */}
            {/* <a id='link-3' href="https://manabispace.blogspot.com" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2 space-x-1'>
              <FontAwesomeIcon icon="fa-brands fa-blogger-b" size='md' />
              <span>Blogger</span>
            </a> */}
            <a id='link-4' href="https://www.linkedin.com/in/kanglerian" target='_blank' className='inline-block text-sm text-white hover:text-black hover:bg-white border border-gray-200 px-5 py-2 space-x-1'>
              <FontAwesomeIcon icon="fa-brands fa-linkedin" size='md' />
              <span>Linkedin</span>
            </a>
          </section>
        </header>
      </section>
      {/* <section className='bg-slate-900'>
        <div className='container mx-auto space-y-10 px-10 py-10 md:px-5'>
          {
            tools.length > 0 ? (
              <div className='flex flex-wrap justify-center items-center gap-8'>
                {
                  tools.map((tool, key) =>
                    <div className='text-gray-300' key={key}>
                      <FontAwesomeIcon icon={`fa-brands ${tool.name}`} size='4x' />
                    </div>
                  )
                }
              </div>
            ) : (
              <p className='text-gray-300 text-center text-sm'>No tools yet.</p>
            )
          }
        </div>
      </section> */}
      {/* <section className='bg-slate-950'>
        <div className='container mx-auto space-y-10 px-10 py-10 md:px-5'>
          <header className='text-center'>
            <h2 className='flex justify-center items-center gap-3 text-2xl font-bold'>
              <img loading="lazy" src={laptopCodeIcon} alt="" className='w-7 h-7' />
              <span className='text-white'>Portofolio Projects</span>
            </h2>
          </header>
          {
            show ? (
              <div>
                <button type='button' onClick={() => setShow(false)} className='inline-block text-sm px-5 py-2.5 mb-3 transition-all ease-in-out rounded-xl space-x-1 text-white bg-slate-800 hover:bg-slate-900'>
                  <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                  <span>Kembali</span>
                </button>
                <DetailPortofolio content={portofolio} />
              </div>
            ) : (
              projects.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                  {
                    projects.map((project, key) =>
                      <div key={key}>
                        <div onClick={() => handleShow(project.id)} className='bg-sky-600 cursor-pointer h-52 bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${project.screenshots[0].screenshot})` }}></div>
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
            )
          }
        </div>
      </section> */}
    </main>
  )
}

export default App