import React from 'react'
import Pomodoro from './Pomodoro'
import Todolist from './Todolist'

const Productive = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2'>
      <Pomodoro/>
      <Todolist/>
    </main>
  )
}

export default Productive