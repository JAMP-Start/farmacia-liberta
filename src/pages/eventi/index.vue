<template lang="pug">
  div.blog-page
    PageHeader(:data="data")
    section.section
      .container
        .content
          div(v-for="(month, index) in monthlyPosts" :key="index")
            template(v-if="month.posts.length")
              h3.has-text-centered.is-capitalized.mb-4 {{ month.title }}
              .columns.is-multiline
                .column.is-one-third(v-for="(post, index) in month.posts" :key="index")
                  PostCard(:post="post")
          PostPagination(:pages="pages")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Prismic from 'prismic-javascript'

import moment from 'moment'

import PageHeader from '~/components/common/PageHeader.vue'
import PostCard from '~/components/blog/PostCard.vue'
import PostPagination from '~/components/blog/PostPagination.vue'

import seo from '~/utils/seo.ts'

@Component({
  components: {
    PageHeader, PostCard, PostPagination
  },
  head() {
    const { data, lang } = this.$data
    return seo(data, lang, this.$route.path)
  }
})
export default class BlogPage extends Vue {

  data: any = {}
  lang: string = 'it'

  async asyncData({ app, query, error }): Promise<any> {
    try {
      const { data, lang } = await app.$prismic.api.getSingle('blog')
      const { total_pages, results } = await app.$prismic.api.query(Prismic.Predicates.at('document.type', 'post'), { pageSize: 12, page: query.page || 1, orderings: '[my.post.date desc]' })
      return { data, pages: total_pages, posts: results, lang }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'No Posts Found' })
    }
  }

  monthlyPosts: any = []

  mounted() {
    this.monthlyPosts = this.postsByMonth()
  }

  postsByMonth(): any {
    const posts = this['posts']
    const months:any = []
    for (let y = 2020; y <= 2030; y++) {
      for (let m = 0; m <= 11; m++) {
        const month:any = posts.filter(item => moment(item.data.date).month() === m && moment(item.data.date).year() === y)
        if (month[0]) {
          const monthName = moment(month[0].data.date).month(m).locale('it-it').format('MMMM YYYY')
          months.push({ title: monthName, posts: month })
        }
      }
    }
    return months.reverse()
  }

}
</script>
