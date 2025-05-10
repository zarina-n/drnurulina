'use client'

import { useTranslation } from 'react-i18next'
import { Section } from '../section'
import AdditionalInfo from '../additional-info'

export default function WorkOrder() {
  const { t } = useTranslation('home')

  const workOrderList = [
    {
      name: t('stepOneName'),
      description: t('stepOneDescription')
    },
    {
      name: t('stepTwoName'),
      description: t('stepTwoDescription')
    },
    {
      name: t('stepThreeName'),
      description: t('stepThreeDescription')
    }
  ]

  return (
    <Section id='work-order' title={t('workOrder')} className='m-2'>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {workOrderList.map(({ name, description }, i) => (
          <div
            key={i}
            className='rounded-lg border border-red-200 bg-white p-6 shadow-md transition-all hover:shadow-lg'
          >
            <div className='mb-4 flex items-center space-x-3'>
              <span className='flex h-8 w-8 items-center justify-center rounded-full bg-red-200 text-sm font-medium text-red-800'>
                {i + 1}
              </span>
              <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
            </div>
            <p className='text-base text-gray-700'>{description}</p>
          </div>
        ))}
      </div>
      <AdditionalInfo text={t('additionalText')} />
    </Section>
  )
}
