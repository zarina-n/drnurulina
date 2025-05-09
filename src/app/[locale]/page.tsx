import { getServerTranslation } from '@/i18n/server'

interface Props {
  params: { locale: string }
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  const { t } = await getServerTranslation(locale)

  return <div>{t('mainPage')}</div>
}
