<template lang="pug">
  section.hero.is-large.is-dark(:style="`background-image: url(${primary.image.url})`",
    :title="primary.image.alt"
    :class="primary.section_classes")
    .hero-body
      .container
        .content
          h1.title(v-if="primary.title") {{ $prismic.asText(primary.title) }}
          h2.subtitle(v-if="primary.title") {{ $prismic.asText(primary.subtitle) }}
          prismic-rich-text(v-if="primary.description", :field="primary.description")
          .buttons
            JLink(:linkUrl="primary.button_link", linkClasses="button is-primary") {{primary.button_label}}
            JLink(:linkUrl="primary.button_2_link", linkClasses="button is-primary is-outlined") {{primary.button_2_label}}
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

<style lang="scss" scoped>
.hero {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &.is-dark h1 {
    color: $white;
  }

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
  }
}
</style>
