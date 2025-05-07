interface NavLinkItem {
  id: number
  href: string
  label: string
  isExternal?: boolean
  homeButton?: boolean
}

export const navItems: NavLinkItem[] = [
  // {
  //   id: 1,
  //   href: '/',
  //   label: 'Dr Nurulina',
  //   isExternal: false,
  //   homeButton: true
  // },
  {
    id: 2,
    href: '/guides',
    label: 'Гайды',
    isExternal: false
  },

  {
    id: 3,
    href: '/reception',
    label: 'Запись на прием',
    isExternal: false
  }
]
