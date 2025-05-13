import Link from 'next/link'
import { navItems } from '@/lib/data'

export default function MainNav() {
  return (
    <div className='hidden md:flex lg:px-8'>
      <Link href='/' className='text-xl italic'>
        Dr Nurulina
      </Link>
      <nav className='ml-8 flex items-center md:gap-6 lg:gap-8'>
        {navItems.map(item => (
          <Link key={item.label} href={item.href} className='text-xl'>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
