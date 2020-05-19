<template lang="pug">
    section.hero.is-medium.is-dark.has-gradient.has-gradient-left-to-right(
      v-if="data.show_header"
      :style="`background-image: url(${data.image.url})`",
      :title="data.image.alt")
      .overlay
      .hero-body
        .container
          .content.has-text-centered
            h1.title(v-if="data.title") {{ $prismic.asText(data.title) }}
            h1.title(v-if="data.custom_title") {{ data.custom_title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'page-header'
})
export default class PageHeaderComponent extends Vue {

  @Prop()
  data!: any

}
</script>
