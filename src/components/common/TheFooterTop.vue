<template lang="pug">
  .footer__top.columns.mb-0.container-fluid.mx-0
    .column.has-background-secondary.has-background-secondary-1
      JLink.has-text-primary(:linkUrl="footerData.footer_top_1_link" linkClasses="navbar-item" linkIcon="phone is-medium") {{ footerData.footer_top_1_label }}
      prismic-rich-text(:field="footerData.footer_top_1_content")
    .column.has-background-secondary.has-background-secondary-2
      JLink.has-text-primary(:linkUrl="footerData.footer_top_2_link" linkClasses="navbar-item" linkIcon="whatsapp is-medium") {{ footerData.footer_top_2_label }}
      prismic-rich-text(:field="footerData.footer_top_2_content")
    .column.has-background-secondary.has-background-secondary-3
      JLink.has-text-primary(:linkUrl="footerData.footer_top_3_link" linkClasses="navbar-item" linkIcon="email is-medium") {{ footerData.footer_top_3_label }}
      prismic-rich-text(:field="footerData.footer_top_3_content")
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'

const footerModule = namespace('footer')

@Component({
  name: 'the-footer-top'
})
export default class TheFooterTopComponent extends Vue {

  @footerModule.Getter('data')
  readonly footerData: any

}
</script>

<style lang="scss">
.footer__top {
  .column {
    padding: 1.5rem;

    @media screen and (min-width: 769px) {
      padding: 3rem;
    }

    @media screen and (max-width: 440px) {
      text-align: center;
    }
  }

  a.navbar-item.has-icon {
    font-weight: 600 !important;
  }
}
</style>
