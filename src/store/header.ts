import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { $prismic } from '~/utils/prismic'

@Module({
  name: 'header',
  namespaced: true,
  stateFactory: true
})
export default class HeaderModule extends VuexModule {

  data: any = null

  @MutationAction({ mutate: ['data'] })
  async getData(lang: string): Promise<any> {
    const header = await $prismic.api.getByUID('header', 'header', { lang })
    const navigation = await $prismic.api.getByUID('menu', header.data.navigation.uid, { lang })
    const data = {
      ...header.data,
      ...navigation.data
    }

    return { data }
  }

}
