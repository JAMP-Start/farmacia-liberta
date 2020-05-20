<template lang="pug">
  section.hero.is-large.is-dark.has-gradient.has-gradient-bottom-to-top(:style="`background-image: url(${primary.image.url})`",
    :title="primary.image.alt"
    :class="primary.section_classes")
    .overlay
    .hero-body
      .container
        .columns.content
          .column.is-4
            .title--special
              h2.special.title(v-if="primary.title") {{ $prismic.asText(primary.title) }}
          .column.is-auto
            prismic-rich-text(v-if="primary.content", :field="primary.content")
            JLink(:linkUrl="primary.button_link", linkClasses="button is-secondary") {{primary.button_label}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'home-about'
})
export default class HomeAboutrComponent extends Vue {

  @Prop({
    type: Object,
    default: (): Slice => {
      return {
        primary: {},
        items: []
      }
    }
  })
  readonly data!: Slice

  get primary(): any {
    return this.data.primary
  }

  get items(): any {
    return this.data.items
  }

}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .hero.is-large .hero-body {
      padding: 30rem 1.5rem 6rem 1.5rem;
  }
}

</style>
