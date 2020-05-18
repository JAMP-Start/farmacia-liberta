<template lang="pug">
  section.section
    .container-fluid
      .content
        h1 Blog
        .columns
          .column.is-one-quarter(v-for="(post, index) in posts" :key="index")
            PostCard(:post="post")
        PostPagination(:pages="pages")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'

import PostCard from '~/components/blog/PostCard.vue'
import PostPagination from '~/components/blog/PostPagination.vue'

@Component({
  components: {
    PostCard, PostPagination
  }
  // head() {
  //   const { data, lang } = this.$data
  //   return seo(data, lang, this.$route.path)
  // }
})
export default class BlogPage extends Vue {

  data: any = {}
  lang: string = 'it'

  async asyncData({ app, query, error }): Promise<any> {
    try {
      const { total_pages, results } = await app.$prismic.api.query(Prismic.Predicates.at('document.type', 'post'), { pageSize: 12, page: query.page || 1, orderings: '[my.post.date desc]' })
      return { pages: total_pages, posts: results }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'No Posts Found' })
    }
  }

}
</script>
