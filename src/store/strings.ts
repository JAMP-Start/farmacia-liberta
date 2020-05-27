import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { MUTATION_TYPE } from '~/constants/index'

export const state = (): any => ({
  data: {}
})

export const mutations: MutationTree<any> = {
  [MUTATION_TYPE.SET_STRINGS](state: any, data: any) {
    state.data = data
  }
}

export const actions: ActionTree<any, any> = {
  async getData({ commit }, lang: string): Promise<any> {
    const stringsData = await this.app.$prismic.api.getSingle('strings', { lang })
    const strings = stringsData.data.string.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {})

    commit(MUTATION_TYPE.SET_STRINGS, strings)
  }
}

export const getters: GetterTree<any, any> = {
  data(state: any) {
    return state.data
  }
}
