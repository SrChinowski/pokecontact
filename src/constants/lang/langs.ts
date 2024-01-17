import i18n from 'i18next'
import spanish from './Spanish.json'

export type LanguageCodes = 'es'

type ResourceKey =
  | string
  | {
      [key: string]: any
    }

interface ResourceLanguage {
  [namespace: string]: ResourceKey
}

type LanguagesResources = {
  [key in LanguageCodes]: ResourceLanguage
}

const resources: LanguagesResources = {
  es: {
    translation: spanish
  }
}

i18n.init({
  resources: resources,
  lng: 'es',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n