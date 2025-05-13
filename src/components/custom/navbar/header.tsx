import MainNav from './main-nav'
import MobileNav from './mobile-nav'
import { Mail, Phone, Send } from 'lucide-react'
import { EMAIL, PHONE_NUMBER } from '@/lib/constants'

export default function Header() {
  // todo: move social icons to a separate component

  return (
    <header className='relative bg-[#0f1c30] px-5 text-white md:sticky md:bottom-0'>
      <div className='absolute top-10 right-10 z-1000 container mx-auto flex h-14 justify-end md:static md:top-0 md:right-0 md:items-center'>
        <MainNav />
        <MobileNav />

        <div className='hidden flex-1 flex-col items-center justify-end gap-1 md:flex md:flex-row md:gap-6'>
          <a
            href={`mailto:${EMAIL}`}
            className='flex items-center gap-2 text-white hover:text-indigo-500'
          >
            <Mail className='h-5 w-5' />
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className='flex items-center gap-2 text-white hover:text-indigo-500'
          >
            <Phone className='h-5 w-5' />
          </a>
          <a
            href={`https://t.me/${PHONE_NUMBER}`}
            className='flex items-center gap-2 text-white hover:text-indigo-500'
          >
            <Send className='h-5 w-5' />
          </a>
        </div>
      </div>
    </header>
  )
}
