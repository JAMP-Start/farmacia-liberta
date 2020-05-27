<template lang="pug">
  footer.footer.has-background-light
    TheFooterTop
    .footer__columns
      .columns.container
        .column(v-for="(column, index) in footerData.body", :key="index" :class="{'is-offset-1': index === 1}")
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
import { Component, Vue, namespace } from 'nuxt-property-decorator'

import SocialIcons from './SocialIcons.vue'
import NavigationMenu from './NavigationMenu.vue'
import TheFooterTop from './TheFooterTop.vue'

const footerModule = namespace('footer')

@Component({
  name: 'the-footer',
  components: {
    NavigationMenu, SocialIcons, TheFooterTop
  }
})
export default class TheFooterComponent extends Vue {

  @footerModule.Getter('data')
  readonly footerData: any

}
</script>

<style lang="scss">
.footer {
  margin-top: 1rem;
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
    margin-top: 1.5rem;
    padding: 0.75rem 0 1rem 0;
    background-color: $white;

    p,
    a {
      color: $grey !important;
    }

    .columns {
      align-items: center;
    }
  }
}
</style>
