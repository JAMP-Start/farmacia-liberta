import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { StringsState } from '~/types/state/StringsState'
import { $prismic } from '~/utils/prismic'

@Module({
  name: 'strings',
  namespaced: true,
  stateFactory: true
})
export default class StringsModule extends VuexModule {

  strings: StringsState = {}

  @MutationAction({ mutate: ['strings'] })
  async setStrings(lang): Promise<any> {
    const stringsData = await $prismic.api.getSingle('strings', { lang })
    console.log(stringsData)
    const strings = stringsData.data.string.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {})
    return { strings }
  }

}
