import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const getTasks = () => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      const taskParse = JSON.parse(tasks);
      setTasks(taskParse);
    } else {
      const data = [];
      localStorage.setItem('tasks', JSON.stringify(data));
    }
  }

  const editTasik = (data) => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      const taskParse = JSON.parse(tasks);
      const result = taskParse[data];
      result.status = !result.status;
      taskParse[data] = result;
      localStorage.setItem('tasks', JSON.stringify(taskParse));
      getTasks();
    }
  }

  const dropTask = (data) => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      const taskParse = JSON.parse(tasks);
      if(data > -1){
        taskParse.splice(data, 1);
      }
      localStorage.setItem('tasks', JSON.stringify(taskParse));
      getTasks();
    }
  }

  const setTask = (event) => {
    if (event.key === 'Enter') {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        const taskParse = JSON.parse(tasks);
        taskParse.push({
          name: input,
          status: false,
        });
        localStorage.setItem('tasks', JSON.stringify(taskParse));
        setInput('');
        getTasks();
      }
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className='flex flex-col bg-white h-screen rounded-xl'>
      <header className='px-10 pt-10 text-center'>
        <div className='space-y-1 mb-5'>
          <h2 className='text-gray-900 font-bold text-2xl'>Todolist</h2>
          <p className='text-sm text-gray-700'>Sebagai second brain, tulis pekerjaanmu hari ini dan selesaikan.</p>
        </div>
        <div className='flex items-center gap-5 mb-5'>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={setTask} className='w-full border border-gray-200 text-gray-800 rounded-xl py-3 px-4 text-xs' placeholder='Write a task ini here...' />
        </div>
      </header>
      <div className='w-full h-full overflow-y-auto px-10 pb-10'>
        {
          tasks.length > 0 ? (
            <ol className='space-y-4 text-sm'>
              {
                tasks.map((task, index) =>
                  <li key={index} className='flex justify-between items-center gap-2'>
                    <div className='w-full flex justify-center items-center gap-3'>
                      <div onClick={() => editTasik(index)} className='w-5 h-5 cursor-pointer rounded-full border border-gray-200 hover:bg-sky-500 hover:border-sky-200'></div>
                      <p onClick={() => editTasik(index)} className={`w-full cursor-pointer text-gray-800 ${task.status ? 'line-through' : ''}`}>{task.name}</p>
                    </div>
                    <button type='button' onClick={() => dropTask(index)} className='text-red-600 hover:text-red-700'><i class="fa-solid fa-circle-xmark"></i></button>
                  </li>
                )
              }
            </ol>
          ) : (
            <p className='w-full text-gray-600 text-xs text-center'>Tasks not found.</p>
          )
        }
      </div>
    </div>
  )
}

export default Todolist