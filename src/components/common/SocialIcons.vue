<template lang="pug">
  .menu.social
    ul.menu-list.is-flex(:class="alignment")
      li(v-for="(item, index) in socialList.body", :key="index")
        JLink(:linkUrl="item.primary.nav_link", linkClasses="navbar-item" :linkIcon="item.primary.nav_icon" :title="item.primary.nav_text")
</template>

<script lang="ts">
import { Component, Vue, Prop, namespace } from 'nuxt-property-decorator'

const socialModule = namespace('social')

@Component({
  name: 'social-icons'
})
export default class SocialIconsComponent extends Vue {

  @socialModule.Getter('data')
  readonly socialList: any

  @Prop()
  alignment!: string

}
</script>

<style lang="scss" scoped>
.menu-list {
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  &.center {
    justify-content: center;
  }

  li {
    a {
      padding-right: 0.25rem;
      padding-left: 0.25rem;

      .icon {
        margin-right: 0 !important;
      }
    }
  }
}
</style>
