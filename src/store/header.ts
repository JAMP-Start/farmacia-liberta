import { MUTATION_TYPE } from '~/constants/index'
import { MutationTree, ActionTree, GetterTree } from 'vuex'

export const state = (): any => ({
  data: null
})

export const mutations: MutationTree<any> = {
  [MUTATION_TYPE.SET_NAVIGATION_DATA](state: any, data: any) {
    state.data = data
  }
}

export const actions: ActionTree<any, any> = {
  async getNavigationData({ commit }, lang): Promise<any> {
    const header = await this.$prismic.api.getByUID('header', 'header', { lang })
    const navigation = await $prismic.api.getByUID('menu', header.data.navigation.uid, { lang })
    const data = {
      ...header.data,
      ...navigation.data
    }

    const { data } = await this['$prismicApi'].getSingle('navigation', { lang })
    commit(MUTATION_TYPE.SET_NAVIGATION_DATA, data)
  }
}

export const getters: GetterTree<any, any> = {
  data(state: any) {
    return state.data
  }
}
