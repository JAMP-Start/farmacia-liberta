import { Store, ActionTree } from 'vuex'
import {
  initialiseStores,
  stringsStore,
  headerStore,
  footerStore,
  socialStore
} from '~/utils/store-accessor'

import localeIso from '~/utils/locale-iso'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export const state = () => ({})
export const actions: ActionTree<any, any> = {
  async nuxtServerInit(_, { app }): Promise<any> {
    // #i18n
    const lang = localeIso(app.i18n.locales, app.i18n.locale)
    // const defaultLang = process.env.DEFAULT_LOCALE
    // const lang = localeIso([{ code: 'defaultLang', iso: 'defaultLang-defaultLang' }], 'defaultLang')

    await stringsStore.setStrings(lang)
    await headerStore.getData(lang)
    await footerStore.getData(lang)
    await socialStore.getData(lang)
  }
}
export * from '~/utils/store-accessor'
