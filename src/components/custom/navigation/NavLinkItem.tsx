'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function activeClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'text-foreground' : 'text-white'
}

const linkStyle =
  'flex cursor-pointer items-center text-lg font-medium transition-colors hover:text-foreground'

const homeButtonStyle = 'underline font-bold'

interface NavLinkItemProps {
  href: string
  children: React.ReactNode
  isExternal?: boolean
  homeButton?: boolean
}

export function NavLinkItem(props: Readonly<NavLinkItemProps>) {
  const pathname = usePathname()
  const { href, children, isExternal = false, homeButton } = props
  const isActive = pathname.includes(href)

  return (
    <Link
      href={href}
      className={cn(
        linkStyle,
        activeClassName({ isActive }),
        homeButton ? homeButtonStyle : ''
      )}
      prefetch
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
    >
      {children}
    </Link>
  )
}
