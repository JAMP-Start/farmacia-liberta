<template lang="pug">
  section.hero.is-medium.is-dark(:style="`background-image: url(${primary.image.url})`",
    :title="primary.image.alt"
    :class="primary.section_classes")
    .overlay
    .hero-body
      .container
        .content
          h1.title(v-if="primary.title") {{ $prismic.asText(primary.title) }}
          h2.subtitle(v-if="primary.title") {{ $prismic.asText(primary.subtitle) }}
          prismic-rich-text(v-if="primary.description", :field="primary.description")
          .buttons
            JLink(:linkUrl="primary.button_link", linkClasses="button is-large is-secondary") {{primary.button_label}}
            JLink(:linkUrl="primary.button_2_link", linkClasses="button is-secondary is-outlined") {{primary.button_2_label}}
          slot
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'banner'
})
export default class BannerComponent extends Vue {

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
