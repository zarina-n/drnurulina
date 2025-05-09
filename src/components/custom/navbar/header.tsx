import MainNav from './main-nav'
import MobileNav from './mobile-nav'
import Link from 'next/link'
import { Send } from 'lucide-react'

export default function Header() {
  // md:bg-gradient-to-r md:from-cyan-100 md:via-teal-200 md:to-blue-300
  return (
    <header className='relative px-5 text-white md:sticky md:bottom-0 md:bg-gradient-to-br md:from-indigo-200 md:via-purple-300 md:to-pink-300'>
      <div className='absolute top-10 right-10 z-1000 container mx-auto flex h-14 justify-end md:static md:top-0 md:right-0 md:items-center'>
        {/* Desktop */}
        <MainNav />
        {/* Mobile */}
        <MobileNav />

        <h1 className='hidden flex-1 items-center justify-end md:flex'>
          <Link href='/'>
            {/*todo: add link and hover text*/}
            <Send />
          </Link>
        </h1>
      </div>
    </header>
  )
}
