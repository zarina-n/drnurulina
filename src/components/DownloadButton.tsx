'use client'

import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import CustomButton from './CustomButton'

export default function DownloadButton({ title }: { title: string }) {
  return (
    <CustomButton asChild={true}>
      <Link
        href='/dummy/dummy.pdf' //todo: add path
        target='_blank'
        rel='noopener noreferrer'
      >
        <DownloadIcon className='mr-2 h-5 w-5' />
        <span>{title}</span>
      </Link>
    </CustomButton>
  )
}
