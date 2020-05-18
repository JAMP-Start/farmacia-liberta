<template lang="pug">
  .container
    section.section.home-hours.has-gradient.has-gradient-left-to-right--blue
      .content
        .columns
          div.column.is-half
            .is-flex
              span.icon.jicon.mr-2
                i(:class="primary.icon_title_left")
              prismic-rich-text(:field="primary.title_left")
            prismic-rich-text.red(:field="primary.content_left")
          div.column.is-half
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
  position: relative;
  margin-top: -4rem;
  z-index: 1;
  box-shadow: 0px 10px 50px $primary-dark;
  ul {
    display: inline-flex;
    flex-flow: row wrap;
    width: 90%;
    justify-content: space-between;
    li {
      padding-left: 0;
      &:before {
        display: none;
      }
      strong {
        display: block;
      }
    }
  }
}
</style>
