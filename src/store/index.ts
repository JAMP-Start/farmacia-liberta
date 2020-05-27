import { ActionTree } from 'vuex'

export const state = (): any => ({})

export const actions: ActionTree<any, any> = {
  async nuxtServerInit({ dispatch }): Promise<any> {
    const lang = 'it-it'

    await dispatch('strings/getStrings', lang)
    await dispatch('navigation/getData', lang)
    await dispatch('header/getData', lang)
    await dispatch('social/getData', lang)
  }
}
