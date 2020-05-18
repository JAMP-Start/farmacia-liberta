import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { $prismic } from '~/utils/prismic'

@Module({
  name: 'social',
  namespaced: true,
  stateFactory: true
})
export default class SocialModule extends VuexModule {

  data: any = null

  @MutationAction({ mutate: ['data'] })
  async getData(lang: string): Promise<any> {
    const { data } = await $prismic.api.getByUID('menu', 'social', { lang })
    return { data }
  }

}
