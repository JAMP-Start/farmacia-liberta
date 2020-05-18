<template lang="pug">
  nav.pagination.is-small(v-if="pages > 1" role="navigation" aria-label="pagination")
    nuxt-link.pagination-previous(:to="`?page=${currentPage - 1}`" :disabled="currentPage === 1") Previous
    nuxt-link.pagination-next(:to="`?page=${currentPage + 1}`" :disabled="currentPage >= pages") Next
    ul.pagination-list.is-hidden-mobile
      li(v-if="currentPage > delta")
        nuxt-link.pagination-link(to="?page=1"
        :class="{ 'is-current': currentPage === 1 }"
        aria-label="Page 1" :aria-current="currentPage") 1
      li(v-if="currentPage > delta + 1")
        span.pagination-ellipsis &hellip;
      li(v-for="page in pages" :key="page" v-if="isInRange(page)")
        nuxt-link.pagination-link(:to="`?page=${page}`"
        :class="{ 'is-current': page === currentPage }"
        :aria-label="`Page ${page}`" :aria-current="currentPage") {{ page }}
      li(v-if="currentPage < pages - delta + 1")
        span.pagination-ellipsis &hellip;
      li(v-if="currentPage < pages - delta")
        nuxt-link.pagination-link(:to="`?page=${pages}`"
        :class="{ 'is-current': pages === currentPage }"
        :aria-label="`Page ${pages}`" :aria-current="currentPage") {{ pages }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'post-pagination'
})
export default class PostPaginationComponent extends Vue {
  @Prop({ type: Number, default() { return 1 } })
  pages!: number

  get currentPage(): number {
    return Number(this.$route.query.page) || 1
  }

  delta: number = 5

  isInRange(page) {
    return page < this.currentPage + this.delta && page > this.currentPage - this.delta
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  li + li {
    margin: 0;
  }
}
</style>
