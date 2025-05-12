'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet'
import { useTranslation } from '@/i18n/client'

export default function TariffsMobile({
  fullInfo,
  name
}: {
  fullInfo: (string | string[])[]
  name: string
}) {
  const { t } = useTranslation('tariffs')

  return (
    <div className='mb-4 md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' className='w-xs cursor-pointer'>
            {t('moreInfo')}
          </Button>
        </SheetTrigger>

        <SheetContent
          className='bg-gray-50 sm:w-full [&>button:last-child]:hidden'
          side='right'
        >
          <SheetClose
            asChild
            className='flex w-full cursor-pointer items-center justify-start px-5'
          >
            <Button variant='ghost' size='icon'>
              <ArrowLeft className='h-5 w-5' />
            </Button>
          </SheetClose>

          <SheetHeader>
            <SheetTitle>{name}</SheetTitle>
            <SheetClose className='hidden' />
          </SheetHeader>

          <div className='space-y-4 rounded-lg px-6'>
            {fullInfo.map((block, j) =>
              Array.isArray(block) ? (
                <ul
                  key={j}
                  className='list-disc space-y-2 pl-6 text-sm text-gray-700 marker:text-violet-400'
                >
                  {block.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={j} className='text-sm leading-relaxed text-gray-700'>
                  {block}
                </p>
              )
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
