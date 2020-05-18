<template lang="pug">
  .menu.social
    ul.menu-list.is-flex(:class="alignment")
      li(v-for="(item, index) in socialList.body", :key="index")
        JLink(:linkUrl="item.primary.nav_link", linkClasses="navbar-item" :linkIcon="item.primary.nav_icon" :title="item.primary.nav_text")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { socialStore } from '~/store'

@Component({
  name: 'social-icons'
})
export default class SocialIconsComponent extends Vue {
  get socialList(): any {
    return socialStore.data
  }

  @Prop()
  alignment!: string
}
</script>

<style lang="scss" scoped>
.menu-list {
  align-items: center;
  &.right {
    justify-content: flex-end;
  }
  li {
    a {
      padding-left: .25rem;
      padding-right: .25rem;
      .icon {
        margin-right: 0!important;
      }
    }
  }
}
</style>
