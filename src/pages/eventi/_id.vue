<template lang="pug">
  div
    PageHeader(:data="headerData")
    .container
      article.post
        .content
          section.section.post__header.has-text-centered
            prismic-rich-text(:field="data.title")
            div.has-text-secondary.has-text-weight-semibold {{ data.date }}
          .post__image
            figure.image-cover
              picture
                prismic-image(:field="data.image")
          section.section.post__content
            prismic-rich-text(:field="data.content")
          Slice(v-for="(slice, index) in data.body",
            :data="slice",
            :key="index")
        section.section.post__footer.has-text-centered
          SocialIcons.mb-4(:alignment="'center'")
          JLink(:linkUrl="{uid:'eventi'}" linkClasses="arrow") Tutti gli eventi
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import PageHeader from '~/components/common/PageHeader.vue'
import SocialIcons from '~/components/common/SocialIcons.vue'
import Slice from '~/components/sections/Slice.vue'

import seo from '~/utils/seo.ts'

@Component({
  components: {
    PageHeader, Slice, SocialIcons
  },
  head() {
    const { data, lang } = this.$data
    return seo(data, lang, this.$route.path)
  }
})
export default class BlogPostPage extends Vue {

  data: any = {}
  lang: string = 'it'

  headerData: any = {
    custom_title: 'Eventi del mese',
    show_header: true,
    image: {
      url: 'https://images.prismic.io/farmacialiberta/7a128cdb-27df-4331-bf92-2f41578692de_christiann-koepke-5SsFQ6oNbX4-unsplash%402x.png?auto=compress,format',
      alt: 'Eventi del Mese'
    }
  }

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
      // padding-bottom: 0;
    }
    &__image {
      figure {
        box-shadow: 0px 10px 50px $primary-dark;
        padding-bottom: calc(840 / 1500 * 100%);
      }
    }
  }
</style>
