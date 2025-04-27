import { navItems } from '@/lib/navItems'
import { NavLinkItem } from './NavLinkItem'

export function Navbar() {
  return (
    <header className='mb-4 flex h-14 items-center justify-center bg-linear-to-bl from-violet-500 to-fuchsia-500 p-5'>
      <div className='flex items-center gap-10'>
        <nav className='flex items-center justify-end gap-10'>
          {navItems.map(navItem => (
            <NavLinkItem
              href={navItem.href}
              isExternal={navItem.isExternal}
              key={navItem.id}
              homeButton={navItem.homeButton}
            >
              {navItem.label}
            </NavLinkItem>
          ))}
        </nav>
      </div>
    </header>
  )
}
