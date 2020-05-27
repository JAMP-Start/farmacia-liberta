import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { MUTATION_TYPE } from '~/constants/index'

export const state = (): any => ({
  data: {}
})

export const mutations: MutationTree<any> = {
  [MUTATION_TYPE.SET_HEADER_DATA](state: any, data: any) {
    state.data = data
  }
}

export const actions: ActionTree<any, any> = {
  async getData({ commit }, lang: string): Promise<any> {
    const header = await this.app.$prismic.api.getByUID('header', 'header', { lang })
    const navigation = await this.app.$prismic.api.getByUID('menu', header.data.navigation.uid, { lang })
    const data = {
      ...header.data,
      ...navigation.data
    }

    commit(MUTATION_TYPE.SET_HEADER_DATA, data)
  }
}

export const getters: GetterTree<any, any> = {
  data(state: any) {
    return state.data
  }
}
