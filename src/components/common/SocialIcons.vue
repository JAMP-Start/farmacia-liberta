<template lang="pug">
  .menu.social
    ul.menu-list.is-flex
      li(v-for="(item, index) in socialList.body", :key="index")
        JLink(:linkUrl="item.primary.nav_link", linkClasses="navbar-item" :linkIcon="item.primary.nav_icon" :title="item.primary.nav_text")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { socialStore } from '~/store'

@Component({
  name: 'social-icons'
})
export default class SocialIconsComponent extends Vue {
  get socialList(): any {
    console.log(socialStore)
    return socialStore.data
  }
}
</script>

<style lang="scss" scoped>
  .social .menu-list {
    justify-content: flex-end;
    .icon {
      margin: 0 auto!important;
    }
  }
</style>
