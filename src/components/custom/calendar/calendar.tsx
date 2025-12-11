import React from 'react'

function daysInMonth(month: number, year: number) {
  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      return 31
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      return 30
    case 2: // February
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28
    default:
      return -1 // Invalid month
  }
}

type DayInMonthsNumber = 31 | 30 | 29 | 28 | -1

export default function Calendar() {
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

  const today = new Date()

  // Getting full month name (e.g. "September")
  const month = today.toLocaleString('default', { month: 'long' })

  const daysInThisMonth: DayInMonthsNumber = daysInMonth(
    currentMonth,
    currentYear
  )

  const days = Array.from({ length: daysInThisMonth }, (_, i) => i + 1)

  return (
    <>
      <h1 className='mt-5 text-white'>{month}</h1>
      <div className='grid grid-cols-7 grid-rows-5 border-white outline'>
        {weekDays.map(day => (
          <div
            key={day}
            className='bg-black-300 flex h-15 w-15 items-center justify-center border-x border-white text-white outline'
          >
            {day}
          </div>
        ))}
        {days.map((day, i) => (
          <div
            key={day}
            className='h-15 w-15 border-x border-white bg-gray-300 pt-2 pl-2 outline'
          >
            {i + 1}
          </div>
        ))}
      </div>
    </>
  )
}
