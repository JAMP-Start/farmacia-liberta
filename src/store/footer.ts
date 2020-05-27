import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { MUTATION_TYPE } from '~/constants/index'

export const state = (): any => ({
  data: {}
})

export const mutations: MutationTree<any> = {
  [MUTATION_TYPE.SET_FOOTER_DATA](state: any, data: any) {
    state.data = data
  }
}

export const actions: ActionTree<any, any> = {
  async getData({ commit }, lang: string): Promise<any> {
    const footer = await this.app.$prismic.api.getByUID('footer', 'footer', { lang })
    const footerPromises = footer.data.body.map(async (slice: any, index: number) => {
      if (slice.slice_type === 'navigation') {
        const slicePromises = slice.items.map(async (nav: any) => {
          const navigation = await this.app.$prismic.api.getByUID('menu', nav.menu.uid, { lang })
          footer.data.body[index].primary = { ...navigation.data, id: nav.menu.uid }
        })

        await Promise.all(slicePromises)
      }
    })

    await Promise.all(footerPromises)

    commit(MUTATION_TYPE.SET_FOOTER_DATA, footer.data)
  }
}

export const getters: GetterTree<any, any> = {
  data(state: any) {
    return state.data
  }
}
