import { ActionTree } from 'vuex'

export const state = (): any => ({})

export const actions: ActionTree<any, any> = {
  async nuxtServerInit({ dispatch }): Promise<any> {
    const lang = 'it-it'

    await dispatch('strings/getData', lang)
    await dispatch('footer/getData', lang)
    await dispatch('header/getData', lang)
    await dispatch('social/getData', lang)
  }
}
