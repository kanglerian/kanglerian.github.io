import React, { useEffect, useState } from 'react'
import DatabaseJSON from '../assets/data/database.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailPortofolio = (props) => {
  const [data, setData] = useState({});
  const [cover, setCover] = useState(null);

  const changeCover = (newCover) => {
    setCover(newCover)
  }

  useEffect(() => {
    const getData = async (id) => {
      const projects = DatabaseJSON.projects;
      const result = projects.find((project) => project.id == id);
      setCover(result.screenshots[0].screenshot);
      setData(result);
    };
    getData(props.content);
  }, [props.content]);
  return (
    <div className='flex flex-col md:flex-row justify-center gap-5'>
      {
        data.id &&
        <>
          <div className='w-full md:w-2/3 md:p-1'>
            <img src={cover} alt={data.name} className='rounded-xl smd:rounded-2xl' />
          </div>
          <div className='w-full md:w-1/3 bg-slate-900 p-6 rounded-2xl border border-slate-700'>
            <header className='space-y-3 mt-3'>
              <h2 className='font-bold text-slate-100 text-xl'>{data.name}</h2>
              <p className='text-slate-300 text-sm'>{data.description}</p>
            </header>
            <div className='flex flex-wrap gap-3 text-white mt-5'>
              {
                data.icons.map((icon, index) =>
                  <FontAwesomeIcon key={index} icon={`fa-brands ${icon.icon} fa-2x`} size='xl' />
                )
              }
            </div>
            <div className='grid grid-cols-3 gap-2 mt-6'>
              {data.screenshots.map((screenshot, index) => (
                <div key={index} onClick={() => changeCover(screenshot.screenshot)} className="cursor-pointer h-20 bg-cover bg-center bg-no-repeat transition-all ease-in-out hover:border-4 hover:border-slate-500" style={{ backgroundImage: `url(${screenshot.screenshot})` }}></div>
              ))}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default DetailPortofolio