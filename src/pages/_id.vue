<template lang="pug">
  div.page
    PageHeader(:data="data")
    .container-fluid
      Slice(v-for="(slice, index) in data.body",
        :data="slice",
        :key="index")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'

import PageHeader from '~/components/common/PageHeader.vue'
import Slice from '~/components/sections/Slice.vue'

import seo from '~/utils/seo.ts'

@Component({
  components: {
    PageHeader, Slice
  },
  head() {
    const { data, lang } = this.$data
    return seo(data, lang, this.$route.path)
  }
})
export default class Page extends Vue {

  data: any = {}

  async asyncData({ app, params, error }): Promise<any> {
    try {
      const { data, lang } = await app.$prismic.api.getByUID('page', params.id)
      const contentTypes: any = []
      data.body.map((slice, index) => {
        if (slice.slice_type === 'content_type_loop') {
          contentTypes.push({ slice: slice.primary, index })
        }
      })
      if (contentTypes.length) {
        const contentTypesPromises = contentTypes.map(async (contentType: any) => {
          try {
            const { results } = await app.$prismic.api.query(Prismic.Predicates.at('document.type', contentType.slice.content_type.toLowerCase()), { lang, pageSize: 4 })
            data.body[contentType.index].items = results
          } catch (e) {
            console.error(e)
            error({ statusCode: 404, message: 'Can not fetch Content Type' })
          }
        })
        await Promise.all(contentTypesPromises)
      }
      return { data, lang: lang.substr(0, 2) }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'Page Not Found' })
    }
  }

}
</script>
