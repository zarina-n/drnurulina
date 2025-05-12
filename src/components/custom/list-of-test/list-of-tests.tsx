'use client'

import { useTranslation } from 'react-i18next'
import { Section } from '../section'
import DownloadButton from '@/components/DownloadButton'

export default function ListOfTests() {
  const { t } = useTranslation('tests')

  return (
    <Section title={t('header')}>
      <div className='text-center'>
        <DownloadButton title={t('downloadPDF')} />
      </div>
    </Section>
  )
}
