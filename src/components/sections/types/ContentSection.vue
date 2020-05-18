<template lang="pug">
  section.section(:class="primary.section_classes")
    .container
      .content
        prismic-rich-text(v-if="primary.title" :field="primary.title")
        prismic-rich-text(v-if="primary.content" :field="primary.content")
        JLink(:linkUrl="primary.button_link", linkClasses="button") {{primary.button_label}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'content-section'
})
export default class ContentSectionComponent extends Vue {

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
