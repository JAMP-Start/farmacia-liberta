import { Store, ActionTree } from 'vuex'
import {
  initialiseStores,
  stringsStore,
  headerStore,
  footerStore,
  socialStore
} from '~/utils/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)

export const plugins = [initializer]
export const state = () => ({})
export const actions: ActionTree<any, any> = {
  async nuxtServerInit(): Promise<any> {
    const lang = 'it-it'
    await stringsStore.setStrings(lang)
    await headerStore.getData(lang)
    await footerStore.getData(lang)
    await socialStore.getData(lang)
  }
}
export * from '~/utils/store-accessor'
