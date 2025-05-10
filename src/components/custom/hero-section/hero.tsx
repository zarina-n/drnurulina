'use client'

import { useTranslation } from '@/i18n/client'
import Image from 'next/image'
import { Section } from '../section'

export default function Hero() {
  const { t } = useTranslation('home')
  return (
    <Section
      id='hero'
      hideTitle
      className='flex w-full flex-col items-center justify-center gap-8 rounded-2xl bg-red-50 p-6 shadow-md md:flex-row'
    >
      <Image
        src='/img/lyaisan.jpg'
        alt='Lyaisan portrait'
        width={180}
        height={180}
        className='rounded-full border-4 border-red-200 shadow-sm'
      />
      <div className='max-w-xl rounded-2xl border border-red-200 bg-white p-6 text-center shadow-inner md:text-left'>
        <blockquote className='mb-4 text-lg text-gray-700 italic'>
          “{t('phrase')}”
        </blockquote>
        <p className='text-sm text-gray-500'>{t('phraseAuthor')}</p>
      </div>
    </Section>
  )
}
