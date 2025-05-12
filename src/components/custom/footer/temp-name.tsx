'use client'

import { useTranslation } from '@/i18n/client'
import { EMAIL, PHONE_NUMBER, TELEGRAM } from '@/lib/constants'
import { Mail, Phone, Send } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation('footer')

  return (
    <footer className='text-md mt-8 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-300 p-6 text-white'>
      <p className='mb-4 text-center'>{`${t('header')}:`}</p>

      <div className='flex flex-col items-center justify-center gap-1 md:flex-row md:gap-6'>
        <a
          href={`mailto:${EMAIL}`}
          className='flex items-center gap-2 text-white hover:text-indigo-500'
        >
          <Mail className='h-5 w-5' />
          <span>{EMAIL}</span>
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className='flex items-center gap-2 text-white hover:text-indigo-500'
        >
          <Phone className='h-5 w-5' />
          <span>{PHONE_NUMBER}</span>
        </a>
        <a
          href={`https://t.me/${TELEGRAM}`}
          className='flex items-center gap-2 text-white hover:text-indigo-500'
        >
          <Send className='h-5 w-5' />
          <span>{TELEGRAM}</span>
        </a>
      </div>

      <div className='mt-4'>
        <p className='text-center text-sm'>
          &copy; {new Date().getFullYear()} {t('allRightsReserved')}
        </p>
      </div>
    </footer>
  )
}
