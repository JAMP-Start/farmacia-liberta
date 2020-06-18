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
            prismic-rich-text.hours(:field="primary.content_left")
          div.column.is-half.px-3
            .is-flex.turni
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
    .hours {
      ul {
        @media screen and (min-width: 560px) {
          display: inline-flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          strong {
            display: block;
            margin-left: 0;
          }
        }
      }
    }
  ul {
    width: 95%;
    li {
      padding-left: 0!important;
      &:before {
        display: none!important;
      }
      strong {
        margin-left: 1rem;
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
