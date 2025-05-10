'use client'

import { useTranslation } from '@/i18n/client'

export default function Footer() {
  const { t } = useTranslation('footer')

  return (
    <footer className='text-md mt-4 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-300 p-5 text-white'>
      <p>{`${t('header')}:`}</p>
      <a href='mailto:'>тут будет твой имейл</a>
      <p> Watsapp может быть</p>
      <p> Telegram может быть</p>
      &copy; {t('allRightsReserved')}
    </footer>
  )
}
