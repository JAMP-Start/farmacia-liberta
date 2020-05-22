<template lang="pug">
  section.section(:id="primary.section_id" :class="primary.section_classes")
    .container
      .columns
        div(v-for="(item, index) in items",
          :key="index",
          :class="`column is-${item.size_sm}-mobile is-${item.size_md}-tablet is-${item.size_lg}-desktop is-${item.size_xl}-widescreen`")
          prismic-rich-text.content(:field="item.content")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'columns'
})
export default class ColumnsComponent extends Vue {

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
