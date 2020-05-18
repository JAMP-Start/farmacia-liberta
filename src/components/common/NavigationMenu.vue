<template lang="pug">
  .menu(:class="{'menu--social': isSocial}")
    p.menu-label(v-if="navigation.navigation_title") {{ navigation.navigation_title[0].text }}
    ul.menu-list(:class="{'is-flex': isSocial}")
      li(v-for="(item, index) in navigation.body", :key="index")
        JLink(:linkUrl="item.primary.nav_link", linkClasses="navbar-item",
        :linkIcon="item.primary.nav_icon") {{ !isSocial ? item.primary.nav_text : '' }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'navigation-menu'
})
export default class NavigationMenuComponent extends Vue {

  @Prop()
  navigation: any

  get isSocial(): boolean {
    return this.navigation.id === 'social'
  }

}
</script>
