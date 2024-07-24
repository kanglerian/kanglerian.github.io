import React, { useEffect, useState } from 'react'
import DatabaseJSON from '../assets/data/database.json'

const DetailPortofolio = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async (id) => {
      const projects = DatabaseJSON.projects;
      const result = projects.find((project) => project.id == id);
      console.log(result.screenshots[0].screenshot);
      setData(result);
    };
    getData(props.content);
  }, [props.content]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='bg-sky-200'>
        {
          data.name &&
          <img src={data.screenshots[0].screenshot} alt="" />
        }
      </div>
      <div className='bg-sky-300'>
        <p>data</p>
      </div>
    </div>
  )
}

export default DetailPortofolio