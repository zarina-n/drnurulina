'use client'

import { useTranslation } from 'react-i18next'
import { Section } from '../section'
import AdditionalInfo from '../additional-info'
import { workOrderIds } from '@/lib/data'

type WorkOrderStep = {
  title: string
  description: string
}

export default function WorkOrder() {
  const { t } = useTranslation('work-order')

  const steps: WorkOrderStep[] = workOrderIds.map(
    id => t(id, { returnObjects: true }) as WorkOrderStep
  )

  return (
    <Section id='work-order' title={t('header')}>
      <div className='xs:px-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {steps.map(({ title, description }, i) => (
          <div
            key={i}
            className='rounded-lg border bg-white p-6 shadow-md transition-all'
          >
            <div className='mb-4 flex items-center space-x-3'>
              <span className='flex h-8 w-8 items-center justify-center rounded-full text-xl font-bold text-black'>
                {i + 1}
              </span>
              <h3 className='text-lg font-semibold text-black'>{title}</h3>
            </div>
            <p className='text-base text-gray-700'>{description}</p>
          </div>
        ))}
      </div>
      <AdditionalInfo text={t('additionalText')} />
    </Section>
  )
}
