import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { $prismic } from '~/utils/prismic'

@Module({
  name: 'footer',
  namespaced: true,
  stateFactory: true
})
export default class FooterModule extends VuexModule {

  data: any = null

  @MutationAction({ mutate: ['data'] })
  async getData(lang: string): Promise<any> {
    const footer = await $prismic.api.getByUID('footer', 'footer', { lang })
    const footerPromises = footer.data.body.map(async (slice: any, index: number) => {
      if (slice.slice_type === 'navigation') {
        const slicePromises = slice.items.map(async (nav: any) => {
          const navigation = await $prismic.api.getByUID('menu', nav.menu.uid, { lang })
          footer.data.body[index].primary = { ...navigation.data, id: nav.menu.uid }
        })

        await Promise.all(slicePromises)
      }
    })

    await Promise.all(footerPromises)

    return { data: footer.data }
  }

}
