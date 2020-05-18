<template lang="pug">
  header.is-sticky
    .topbar
      .columns.container
        .topbar__left.column.has-text-centered.has-text-left-desktop(v-if="headerData.topbar_left")
          prismic-rich-text(:field="headerData.topbar_left")
        .topbar__center.column.has-text-centered(v-if="headerData.topbar_center")
          prismic-rich-text(:field="headerData.topbar_center")
        .topbar__right.column.has-text-centered.has-text-right-desktop(v-if="headerData.topbar_right")
          SocialIcons
          prismic-rich-text(:field="headerData.topbar_right")
    nav.navbar(role="navigation", aria-label="main navigation")
      .container
        .navbar-brand
          nuxt-link.navbar-item(to="/")
            prismic-image(:field="headerData.logo")
          a.navbar-burger.burger(role="button",
            aria-label="menu",
            aria-expanded="false",
            data-target="navbarMain",
            @click="toggleMenu = !toggleMenu"
            :class="{ 'is-active': toggleMenu }")
            span(aria-hidden="true")
            span(aria-hidden="true")
            span(aria-hidden="true")
        .navbar-menu(:class="{ 'is-active': toggleMenu }")
          .navbar-start
            .navbar-item.is-hoverable(v-for="(item, index) in menu",
              :key="index",
              :class="{ 'has-dropdown': hasDropdown(item.items) }")
              JLink(:linkUrl="item.primary.nav_link",
                :linkClasses="hasDropdown(item.items) ? 'navbar-item navbar-link' : 'nav-item'",
                :linkIcon="item.primary.nav_icon") {{ item.primary.nav_text }}
              .navbar-dropdown(v-if="hasDropdown(item.items)")
                .navbar-item.is-hoverable(v-for="(item2, index2) in item.items",
                  :key="index + index2",
                  :class="{ 'has-dropdown': hasDropdown(item2.items) }")
                  JLink(:linkUrl="item2.primary.nav_link",
                    :linkClasses="hasDropdown(item2.items) ? 'navbar-item navbar-link' : 'nav-item'",
                    :linkIcon="item2.primary.nav_icon") {{ item2.primary.nav_text }}
                  .navbar-dropdown(v-if="hasDropdown(item2.items)")
                    .navbar-item(v-for="(item3, index3) in item2.items",
                      :key="index + index2 + index3")
                      JLink(:linkUrl="item3.nav_link",
                      :linkIcon="item3.nav_icon") {{ item3.nav_text }}
          .navbar-end
            .navbar-item
              .buttons
                JLink(:linkUrl="{url: 'https://google.com'}" linkClasses="button is-primary")
                  strong Sign Up
                JLink(:linkUrl="{url: 'https://google.it'}" linkClasses="button is-light")
                  strong Log In
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SocialIcons from './SocialIcons.vue'
import { headerStore } from '~/store'

@Component({
  name: 'the-header',
  components: {
    SocialIcons
  }
})
export default class TheHeaderComponent extends Vue {

  toggleMenu: boolean = false
  menu: any[] = []

  get headerData(): any {
    return headerStore.data
  }

  mounted(): void {
    let parentIndex = -1
    this.headerData.body.forEach((item: any, index: number) => {
      if (item.slice_type === '1st_level') {
        this.menu.push({ ...item, items: [] })
        parentIndex = index
      } else {
        this.menu[parentIndex].items.push(item)
      }
    })
  }

  hasDropdown(items = []): boolean {
    return items.length > 0
  }

}
</script>

<style lang="scss">
.topbar {
  background: $light;
  .columns {
    margin-bottom: 0;
  }
}
.is-sticky {
  position: sticky;
  top: 0;
  z-index: 2;
}

@media screen and (min-width: 1024px) {
  .navbar-item .navbar-dropdown .navbar-item {
    &.navbar-link:not(.is-arrowless):after {
      transform: rotate(225deg);
    }

    &.is-hoverable > .navbar-dropdown {
      display: none !important;
    }

    &.is-hoverable:hover > .navbar-dropdown {
      display: block !important;
    }

    .navbar-dropdown {
      top: 0;
      left: 100%;
    }
  }
  .navbar-end {
    .buttons {
      .button {
        margin-top: 0!important;
      }
    }
  }
}
</style>
