<template lang="pug">
  footer.footer
    .container
      .footer__columns.columns
        .column(v-for="(column, index) in footerData.body", :key="index")
          .footer__content(v-if="column.slice_type === 'content_section'")
            prismic-rich-text(:field="column.primary.content")
          .footer__content(v-if="column.slice_type === 'navigation'")
            NavigationMenu(:navigation="column.primary")
      .footer__bottom.content.has-text-centered
        prismic-rich-text(v-if="footerData.footer_bottom", :field="footerData.footer_bottom")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { footerStore } from '../../store'

import NavigationMenu from './NavigationMenu.vue'

@Component({
  name: 'the-footer',
  components: {
    NavigationMenu
  }
})
export default class TheFooterComponent extends Vue {

  get footerData(): any {
    return footerStore.data
  }

}
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem 1.5rem 1.5rem 1.5rem;
  &__bottom {
    border-top: 1px solid;
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
}
</style>
