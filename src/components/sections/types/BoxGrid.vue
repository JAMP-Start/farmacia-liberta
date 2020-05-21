<template lang="pug">
  section.section(:class="primary.section_classes")
    .container
      .content
        prismic-rich-text(:field="primary.content")
      .columns.is-multiline
        div.column.is-4-desktop.is-6-tablet.is-1(v-for="(item, index) in items", :key="index")
          .box.is-shadowless
            article.media.is-block
              .media-image(v-if="item.image.url")
                figure.image
                  prismic-image(:field="item.image")
              .media-icon(v-if="item.icon.url")
                figure.image.is-64x64.mb-2
                  prismic-image(:field="item.icon")
              .media-content.content
                prismic-rich-text(:field="item.title")
                prismic-rich-text(:field="item.content")
                JLink(:linkUrl="item.link", linkClasses="button") {{ item.link_text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'box-grid'
})
export default class BoxGridComponent extends Vue {

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
