'use client'

import { Section } from '../section'
import AdditionalInfo from '../additional-info'
import { useTranslation } from '@/i18n/client'
import { tariffsDescription } from '@/lib/tariffs'
import CustomButton from '@/components/CustomButton'
import TariffsDesktop from './tariffs-desktop'
import TariffsMobile from './tariffs-mobile'
import Calendar from '../calendar/calendar'

export default function Tariffs() {
  const { t } = useTranslation('tariffs')

  return (
    <Section
      id='tariffs'
      title={t('header')}
      className='flex flex-col items-center'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        {tariffsDescription.map(({ name, price, shortInfo, fullInfo }) => (
          <div
            key={name}
            className='ring-opacity-10 flex flex-col items-center rounded-lg border border-gray-200 bg-white px-2 py-6 shadow-sm ring-2 ring-indigo-200 md:px-3'
          >
            <h3 className='mb-2 text-center text-lg font-semibold text-gray-800 uppercase'>
              {name}
            </h3>
            <p className='mb-2 text-center text-sm text-gray-600'>
              {shortInfo}
            </p>
            <p className='mb-4 text-base font-bold text-indigo-600'>{price}</p>

            <TariffsDesktop fullInfo={fullInfo} />
            <TariffsMobile fullInfo={fullInfo} name={name} />

            <CustomButton>{t('bookAppointment')}</CustomButton>
          </div>
        ))}
      </div>

      <AdditionalInfo text={t('additionalText')} />
      <Calendar />
    </Section>
  )
}
