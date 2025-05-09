import i18nConfig from '@/i18nConfig'

export const defaultNS = 'common'
export const cookieName = 'i18next'

export function getOptions(
  lng: string = i18nConfig.defaultLocale,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: i18nConfig.locales,
    fallbackLng: i18nConfig.defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
