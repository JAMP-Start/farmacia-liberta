<template lang="pug">
  div
    strong iframe for single marker
    div.map__wrapper(v-if="primary.map_iframe" v-html="$prismic.asText(primary.map_iframe)")
    div or for multiple markers
    div Primary:
      code {{ primary }}
    div Items:
      code {{ items }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'map-section'
})
export default class MapSectionComponent extends Vue {

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
