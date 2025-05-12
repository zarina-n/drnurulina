'use client'

import { useTranslation } from '@/i18n/client'
import { Section } from '../section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { faqIds } from '@/lib/data'

type FAQItem = {
  question: string
  answer: string
}

export default function FAQ() {
  const { t } = useTranslation('faq')

  const faqs: FAQItem[] = faqIds.map(
    id => t(id, { returnObjects: true }) as FAQItem
  )

  return (
    <Section id='faq' title={t('header')} noSeparator>
      <Accordion
        type='single'
        collapsible
        className='mx-auto w-full max-w-3xl space-y-2'
      >
        {faqs.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className='rounded-lg border border-gray-200 bg-indigo-50 px-4 py-3 shadow-sm transition-all hover:shadow-md'
          >
            <AccordionTrigger className='cursor-pointer text-left text-lg font-medium text-gray-800 hover:no-underline'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='text-sm text-gray-700'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
