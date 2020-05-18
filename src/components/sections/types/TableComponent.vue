<template lang="pug">
  section.section
    .container
      .content
        prismic-rich-text(:field="primary.table_title")
        prismic-embed(:field="primary.embed_table")
        table.table
          thead
            tr
              th col 1
              th col 2
          tbody
            tr(v-for="(row, index) in items", :key="index")
              td(v-for="(column, index) in row", :key="index")
                prismic-rich-text(:field="column")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'table-component'
})
export default class TableComponent extends Vue {

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
