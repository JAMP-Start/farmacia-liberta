<template lang="pug">
  .topbar.is-hidden-touch
    .columns.container
      .topbar__left.column.is-8.has-text-centered.has-text-left-desktop.is
        JLink.has-text-primary(:linkUrl="{url:'tel:+39043440493'}" linkClasses="navbar-item" linkIcon="hours") Lun-Ven 8:30/13:00 - 15:00/19:30
        JLink.has-text-primary(:linkUrl="{url:'tel:+39043440493'}" linkClasses="navbar-item" linkIcon="phone2") +39 0434 40493
      .topbar__right.column.is-4.has-text-centered.has-text-right-desktop
        SocialIcons(:alignment="'right'")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SocialIcons from './SocialIcons.vue'

@Component({
  name: 'the-topbar',
  components: {
    SocialIcons
  }
})
export default class TheTopbarComponent extends Vue {
}
</script>

<style lang="scss">
.topbar {
  background-color: $white;
  z-index: 99;
  position: relative;
  box-shadow: 0px 3px 16px $primary-lighter;
  .columns {
    margin-bottom: 0;
  }
}
</style>
