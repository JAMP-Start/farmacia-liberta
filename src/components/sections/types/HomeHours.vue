<template lang="pug">
  .container
    section.section.home-hours.has-gradient.has-gradient-left-to-right--blue.is-overlapped
      .content
        .columns
          div.column.is-half.px-3
            .is-flex
              span.icon.jicon.mr-2
                i(:class="primary.icon_title_left")
              prismic-rich-text(:field="primary.title_left")
            prismic-rich-text.red(:field="primary.content_left")
          div.column.is-half.px-3
            .is-flex
              span.icon.jicon.mr-2
                i(:class="primary.icon_title_right")
              prismic-rich-text(:field="primary.title_right")
            prismic-rich-text(:field="primary.content_right")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'home-hours'
})
export default class HomeHoursComponent extends Vue {

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

}
</script>

<style lang="scss">
.home-hours {
  ul {
    display: inline-flex;
    flex-flow: row wrap;
    width: 90%;
    justify-content: space-between;
    li {
      padding-left: 0!important;
      &:before {
        display: none!important;
      }
      strong {
        display: block;
      }
    }
  }
  a {
    @extend .button;
    padding: .75rem 1.5rem;
    border: 1px solid $white;
    &:hover {
      background-color: $white;
      color: $primary!important;
    }
  }
}
</style>
