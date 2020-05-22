<template lang="pug">
  nuxt-link(v-if="!isExternal && isSet",
    :to="getLinkUrl(linkUrl)",
    :class="[linkClasses, { 'has-icon': linkIcon }]")
      span.icon(v-if="linkIcon")
        i(:class="linkIcon")
      span
        slot
  a(v-else-if="isSet",
    :href="getLinkUrl(linkUrl)",
    :class="[linkClasses, { 'has-icon': linkIcon }]",
    :target="linkUrl.target || false")
      span.icon.jicon(v-if="linkIcon")
        i(:class="linkIcon")
      span
        slot
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'j-link'
})
export default class JLinkComponent extends Vue {

  @Prop({ type: Object, default() { return {} } })
  linkUrl!: object

  @Prop()
  linkClasses!: string

  @Prop()
  linkToResolve!: any

  @Prop()
  linkIcon!: string

  get isExternal(): boolean {
    const linkUrl = this.getLinkUrl(this.linkUrl)
    return linkUrl.startsWith('http') || linkUrl.startsWith('tel') || linkUrl.startsWith('mailto')
  }

  get isSet(): boolean {
    return this.getLinkUrl(this.linkUrl).length > 0
  }

  getLinkUrl(data: any): string {
    if (this.linkToResolve) {
      return this.$prismic.linkResolver(this.linkToResolve)
    } else {
      return data.uid ? '/' + data.uid : data.url || ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-item {
    &.has-icon {
      display: inline-flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      font-weight: 400!important;
       @media screen and (max-width: 440px) {
         flex-flow: column wrap;
         width: 100%;
         text-align: center;
         .icon {
           margin-right: 0;
           margin-bottom: 1rem;
         }
       }
      .icon {
        margin-right: .5rem;
      }
    }
  }
</style>
