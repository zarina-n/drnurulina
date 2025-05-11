'use client'

import { useTranslation } from '@/i18n/client'
import { Section } from '../section'

export default function Reviews() {
  const { t } = useTranslation('reviews')

  return (
    <Section title={t('header')}>
      <div></div>
    </Section>
  )
}
