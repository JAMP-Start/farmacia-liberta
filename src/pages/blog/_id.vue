<template lang="pug">
  .container
    article.post.content
      section.section.post__header
        prismic-rich-text(:field="data.title")
        small {{ data.date }}
        prismic-image(:field="data.image")
      Slice(v-for="(slice, index) in data.body",
        :data="slice",
        :key="index")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Slice from '~/components/sections/Slice.vue'

import seo from '~/utils/seo.ts'

@Component({
  components: {
    Slice
  },
  head() {
    const { data, lang } = this.$data
    return seo(data, lang, this.$route.path)
  }
})
export default class BlogPostPage extends Vue {

  data: any = {}
  lang: string = 'it'

  async asyncData({ app, params, error }): Promise<any> {
    try {
      const { data, lang } = await app.$prismic.api.getByUID('post', params.id)
      return { data, lang: lang.substr(0, 2) }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'Post Not Found' })
    }
  }

}
</script>

<style lang="scss" scoped>
  .post {
    &__header {
      padding-bottom: 0;
    }
  }
</style>
