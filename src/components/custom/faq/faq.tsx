'use client'

import { useTranslation } from '@/i18n/client'
import { Section } from '../section'

export default function FAQ() {
  const { t } = useTranslation('faq')

  return (
    <Section title={t('header')} noSeparator>
      <div></div>
    </Section>
  )
}
