export const faqIds = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5']

export const reviewIds = ['review1', 'review2', 'review3', 'review4', 'review5']

export const workOrderIds = ['step1', 'step2', 'step3', 'step4']

export type TariffsType = {
  name: string
  price: string
  shortInfo: string
  fullInfo: (string | string[])[]
}

export const tariffsDescription = [
  {
    id: 'tariff1',
    price: '25.000 ₽'
  },
  {
    id: 'tariff2',
    price: '5.000 ₽'
  },
  {
    id: 'tariff3',
    price: '3.500 ₽'
  }
]

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
