<template lang="pug">
  section.section(:class="primary.section_classes")
    .container
      .content
        prismic-rich-text(:field="primary.content")
      .video__wrapper
        prismic-embed(:field="primary.video")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'video-section'
})
export default class VideoSectionComponent extends Vue {

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

<style lang="scss">
.video__wrapper {
  margin: 0 auto;
  max-width: 1024px;

  div {
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
    width: 100%;
    height: 0;

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
