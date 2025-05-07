import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-4 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-300 p-5 text-lg font-medium text-white'>
      <p>По всем вопросам обращаться:</p>
      <a href='mailto:'>тут будет твой имейл</a>
      <p> Watsapp может быть</p>
      <p> Telegram может быть</p>
      &copy; Все права защищены
    </footer>
  )
}
