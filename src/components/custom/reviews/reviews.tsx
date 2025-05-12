'use client'

import { useState } from 'react'
import { useTranslation } from '@/i18n/client'
import { Section } from '../section'
import { reviewIds } from '@/lib/data'

type Review = {
  author: string
  text: string
}

export default function Reviews() {
  const { t } = useTranslation('reviews')

  const [showAll, setShowAll] = useState(false)
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([])

  const reviews = reviewIds.map(id => t(id, { returnObjects: true }) as Review)
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3)

  const toggleExpanded = (index: number) => {
    setExpandedIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <Section id='reviews' title={t('header')}>
      <div className='xs:px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {visibleReviews.map((review, i) => {
          const isExpanded = expandedIndexes.includes(i)
          const isLong = review.text.length > 200
          const displayedText =
            isExpanded || !isLong
              ? review.text
              : review.text.slice(0, 200) + '...'

          return (
            <div
              key={i}
              className='flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-shadow'
            >
              <p className='grow text-sm leading-relaxed whitespace-pre-wrap text-gray-700 italic'>
                “{displayedText}”
              </p>
              {isLong && (
                <button
                  onClick={() => toggleExpanded(i)}
                  className='mt-2 cursor-pointer text-left text-sm text-indigo-500 hover:underline'
                >
                  {isExpanded ? t('showLess') : t('showMore')}
                </button>
              )}
              <div className='mt-4 text-right'>
                <p className='text-sm font-semibold text-gray-800'>
                  {review.author}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {reviews.length > 3 && (
        <div className='mt-6 flex justify-center'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='text-sm text-indigo-600 hover:underline'
          >
            {showAll ? t('showLess') : t('showMore')}
          </button>
        </div>
      )}
    </Section>
  )
}
