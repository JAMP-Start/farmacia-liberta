<template lang="pug">
  section.section.has-text-centered
    .container
      .content
        template(v-if="error.statusCode === 404")
          h1 404
          h2 {{ error.message }}
        h2(v-else) An error occurred
        nuxt-link.button.is-primary(to="/") Homepage
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: `${this.error.statusCode} ${this.error.message} | ${process.env.SITENAME}`
    }
  },
  props: ['error']
})
export default class ErrorLayout extends Vue {}
</script>
<style lang="scss" scoped>
</style>
