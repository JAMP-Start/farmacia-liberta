import { stringsStore } from '~/utils/store-accessor'

// #i18n
export default function({ app }) {

  app.i18n.onLanguageSwitched = async (_, newLocale: string): Promise<void> => {
    const lang = app.i18n.locales.find(locale => locale.code === newLocale).iso.toLowerCase()

    await stringsStore.setStrings(lang)
    // await navigationStore.getData(lang)
  }

}
