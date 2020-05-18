<template lang="pug">
  div(:class="`space space--${primary.size}`")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'empty-space'
})
export default class EmptySpaceComponent extends Vue {

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
.space {
  display: block;
  background-color: lightcoral;

  @for $i from 1 through 6 {
    &--#{$i} {
      height: 1rem * $i;
    }
  }
}
</style>
