<template lang="pug">
  section.section(:id="primary.section_id" :class="[primary.section_classes, {'has-image-as-background': primary.image_as_background}]")
    .content(:class="primary.image_as_background ? 'container-fluid' : 'container'")
      .columns(v-for="(item, index) in items",
        :key="index",
        :class="[{ 'columns--reverse': item.columns_order === 'Content Left | Image Right', 'is-large': primary.image_as_background }]")
        .column.is-6.column-image
          figure(:class="{'image-cover': primary.image_as_background}")
            picture
              prismic-image(:field="item.image")
        .column.is-6.column-content
          prismic-rich-text(:field="item.content")
          JLink(:linkUrl="item.button_link", linkClasses="button") {{item.button_label}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'two-columns-with-image-section'
})
export default class TwoColumnsWithImageSectionComponent extends Vue {

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
.column {
  position: relative;
}
.columns--reverse {
  flex-direction: row-reverse;
}
.has-image-as-background {
  figure {
    padding-bottom: 56%;
  }
  .column-content {
    align-self: center;
  }
}
</style>
