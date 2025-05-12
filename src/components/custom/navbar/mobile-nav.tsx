import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { navItems } from '@/lib/data'
import { AlignJustify, Send } from 'lucide-react'
import Link from 'next/link'

export default function MobileNav() {
  // bg-gradient-to-r from-cyan-100 via-teal-200 to-blue-300
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger className='left-5 cursor-pointer rounded-full bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-300 p-2 opacity-75 hover:opacity-100'>
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
          <h1 className='flex items-center justify-start'>
            <Link href='/'>
              <Send />
            </Link>
          </h1>
        </SheetContent>
      </Sheet>
    </div>
  )
}
