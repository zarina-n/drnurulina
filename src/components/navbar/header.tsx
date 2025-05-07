import MainNav from './main-nav'
import MobileNav from './mobile-nav'
import Link from 'next/link'
import { Send } from 'lucide-react'

export default function Header() {
  // md:bg-gradient-to-r md:from-cyan-100 md:via-teal-200 md:to-blue-300
  return (
    <header className='sticky bottom-0 px-5 text-white md:bg-gradient-to-br md:from-indigo-200 md:via-purple-300 md:to-pink-300'>
      <div className='container mx-auto flex h-14 items-center'>
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
