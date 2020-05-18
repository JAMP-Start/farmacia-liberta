<template lang="pug">
  footer.footer.has-background-light
    .footer__columns
      .columns.container
        .column(v-for="(column, index) in footerData.body", :key="index")
          .footer__content(v-if="column.slice_type === 'content_section'")
            prismic-rich-text(:field="column.primary.content")
          .footer__content(v-if="column.slice_type === 'navigation'")
            NavigationMenu(:navigation="column.primary")
    .footer__bottom
      .columns.container
        .column.is-4.has-text-center.has-text-left-desktop
          SocialIcons
        .column.is-8.has-text-centered.has-text-right-desktop
          prismic-rich-text(v-if="footerData.footer_bottom", :field="footerData.footer_bottom")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { footerStore } from '../../store'

import SocialIcons from './SocialIcons.vue'
import NavigationMenu from './NavigationMenu.vue'

@Component({
  name: 'the-footer',
  components: {
    NavigationMenu, SocialIcons
  }
})
export default class TheFooterComponent extends Vue {

  get footerData(): any {
    return footerStore.data
  }

}
</script>

<style lang="scss">
.footer {
  padding: 0;
  color: $primary;
  &__columns {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    img {
      max-width: 245px;
      max-height: 45px;
    }
  }
  &__bottom {
    background-color: $white;
    color: $grey;
    margin-top: 1.5rem;
    .columns {
      align-items: center;
    }
  }
}
</style>
