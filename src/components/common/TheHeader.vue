<template lang="pug">
  header.is-sticky
    .container
      nav.navbar(role="navigation", aria-label="main navigation")
        .navbar-brand
          nuxt-link.navbar-item(to="/")
            prismic-image.logo(:field="headerData.logo")
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
          .navbar-end
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

  get headerData(): any {
    return headerStore.data
  }

  get menu(): any[] {
    const menu: any[] = []

    let parentIndex = -1

    headerStore.data.body.forEach((item: any, index: number) => {
      if (item.slice_type === '1st_level') {
        menu.push({ ...item, items: [] })
        parentIndex = index
      } else {
        menu[parentIndex].items.push(item)
      }
    })

    return menu
  }

  hasDropdown(items = []): boolean {
    return items.length > 0
  }

}
</script>

<style lang="scss">
header {
  background-color: $white;
  box-shadow: 0px 3px 16px rgba($primary-lighter, 0.2);
}
.is-sticky {
  position: sticky;
  top: 0;
  z-index: 3;
}

.logo {
  min-width: 180px;
  min-height: 35px;
  width: auto;
}

.nav-item {
  padding: 1rem 2rem;
  font-weight: 600;

  :after {
    position: absolute;
    left: 50%;
    display: block;
    margin-top: 0.5rem;
    width: 42px;
    height: 3px;
    background-color: transparent;
    content: "";
    transform: translateX(-50%);
  }

  &.nuxt-link-exact-active {
    :after {
      background-color: $secondary !important;
    }
  }
}

@media screen and (min-width: 1024px) {
  .navbar-brand {
    margin: 2rem 0;

    .logo {
      min-height: 50px;
      width: 100%;
    }
  }
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
        margin-top: 0 !important;
      }
    }
  }
}
</style>
