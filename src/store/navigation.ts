import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { $prismic } from '~/utils/prismic'

@Module({
  name: 'navigation',
  namespaced: true,
  stateFactory: true
})
export default class NavigationModule extends VuexModule {

  data: any = null

  @MutationAction({ mutate: ['data'] })
  async getData(lang: string): Promise<any> {
    const { data } = await $prismic.api.getByUID('menu', 'main-menu', { lang })
    return { data }
  }

}
