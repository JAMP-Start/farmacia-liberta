import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { MUTATION_TYPE } from '~/constants/index'

export const state = (): any => ({
  data: {}
})

export const mutations: MutationTree<any> = {
  [MUTATION_TYPE.SET_SOCIAL_DATA](state: any, data: any) {
    state.data = data
  }
}

export const actions: ActionTree<any, any> = {
  async getData({ commit }, lang: string): Promise<any> {
    const { data } = await this.app.$prismic.api.getByUID('menu', 'social', { lang })

    commit(MUTATION_TYPE.SET_SOCIAL_DATA, data)
  }
}

export const getters: GetterTree<any, any> = {
  data(state: any) {
    return state.data
  }
}
