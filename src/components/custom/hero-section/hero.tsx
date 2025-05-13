'use client'

import { useTranslation } from '@/i18n/client'
import { Section } from '../section'
import Image from 'next/image'

export default function Hero() {
  const { t } = useTranslation('hero')

  return (
    <Section
      id='hero'
      hideTitle
      className='flex w-full flex-col items-center justify-center gap-8 rounded-2xl bg-[#c2c6ce] p-6 shadow-md md:flex-row'
      noSeparator
    >
      <Image
        src='/img/avatar.jpg'
        alt='Lyaisan portrait' //todo: fix
        width={180}
        height={180}
        className='rounded-3xl border-4 object-cover shadow-sm'
      />
      <div className='max-w-xl rounded-2xl border bg-white p-6 text-center shadow-inner md:text-left'>
        <blockquote className='mb-4 text-lg text-gray-700 italic'>
          “{t('quote')}”
        </blockquote>
        <p className='text-sm text-gray-500'>{t('quoteAuthor')}</p>
      </div>
    </Section>
  )
}
