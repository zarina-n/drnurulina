import Link from 'next/link'
import { navItems } from '@/lib/data'

export default function MainNav() {
  return (
    <div className='hidden md:flex'>
      <Link href='/' className='italic'>
        Dr Nurulina
      </Link>
      <nav className='ml-8 flex items-center md:gap-4 lg:gap-4'>
        {navItems.map(item => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
