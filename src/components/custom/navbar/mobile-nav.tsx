import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { EMAIL, PHONE_NUMBER } from '@/lib/constants'
import { navItems } from '@/lib/data'
import { AlignJustify, Mail, Phone, Send } from 'lucide-react'
import Link from 'next/link'

export default function MobileNav() {
  // todo: move social icons to a separate component
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger className='left-5 cursor-pointer rounded-full bg-[#6680c0] p-2 opacity-75 hover:opacity-100'>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className='z-2000 p-4'>
          <SheetTitle>
            <Link href='/' className='italic'>
              Dr Nurulina
            </Link>
          </SheetTitle>

          <nav className='flex flex-1 flex-col items-start gap-3'>
            {navItems.map(item => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className='flex items-center justify-start gap-3'>
            <a
              href={`mailto:${EMAIL}`}
              className='flex items-center gap-2 text-black hover:text-indigo-500'
            >
              <Mail className='h-5 w-5' />
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className='flex items-center gap-2 text-black hover:text-indigo-500'
            >
              <Phone className='h-5 w-5' />
            </a>
            <a
              href={`https://t.me/${PHONE_NUMBER}`}
              className='flex items-center gap-2 text-black hover:text-indigo-500'
            >
              <Send className='h-5 w-5' />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
