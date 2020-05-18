<template lang="pug">
  section.section
    .content
      prismic-rich-text(:field="primary.title")
      ul
        li(v-for="(item, index) in items", :key="index") {{ item.item }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'example-section'
})
export default class ExampleSectionComponent extends Vue {

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
