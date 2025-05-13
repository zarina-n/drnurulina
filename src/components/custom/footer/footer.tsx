'use client'

import { useTranslation } from '@/i18n/client'
import { EMAIL, PHONE_NUMBER } from '@/lib/constants'
import { Mail, Phone, Send } from 'lucide-react'

export default function Footer() {
  // todo: move social icons to a separate component

  const { t } = useTranslation('footer')

  return (
    <footer className='text-md flex flex-col items-center justify-center bg-[#0f1c30] p-6 pt-8 text-white'>
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
          href={`https://t.me/${PHONE_NUMBER}`}
          className='flex items-center gap-2 text-white hover:text-indigo-500'
        >
          <Send className='h-5 w-5' />
          <span>{PHONE_NUMBER}</span>
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
