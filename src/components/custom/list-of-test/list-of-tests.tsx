'use client'

import { useTranslation } from 'react-i18next'
import { Section } from '../section'
import { DownloadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ListOfTests() {
  const { t } = useTranslation('home')

  return (
    <Section title={t('testsHeader')}>
      <div className='mt-8 text-center'>
        <Button asChild size='lg' color='indigo'>
          <Link
            href='/dummy/dummy.pdf' //todo: add path
            target='_blank'
            rel='noopener noreferrer'
          >
            <DownloadIcon className='mr-2 h-5 w-5' />
            <span>{t('downloadPDF')}</span>
          </Link>
        </Button>
      </div>
    </Section>
  )
}
