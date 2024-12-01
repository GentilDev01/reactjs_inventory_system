import React from 'react'
import { useState } from 'react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Calend = () => {
  const [value, setValue] = useState(new Date())

  const handleChange = (newDate) => {
    setValue(newDate)
  }

  return (
    <main className='bg-black text-white'>
      <Calendar
        onChange={handleChange}
        value={value}
      />
    </main>
  )
}

export default Calend