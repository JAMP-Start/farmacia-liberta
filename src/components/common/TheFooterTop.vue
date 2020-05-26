<template lang="pug">
  .footer__top.columns.mb-0.container-fluid.mx-0
    .column.has-background-secondary.has-background-secondary-1
      JLink.has-text-primary(:linkUrl="{url:'tel:+39043440493'}" linkClasses="navbar-item" linkIcon="phone is-medium") +39 0434 40493
      div Siamo sempre a tua disposizione per <strong>consigli e indicazioni terapeutiche</strong>.
    .column.has-background-secondary.has-background-secondary-2
      JLink.has-text-primary(:linkUrl="{url:'https://wa.me/393518056456', target: '_blank'}" linkClasses="navbar-item" linkIcon="whatsapp is-medium") +39 351 8056456
      div <strong>Prenota il prodotto</strong> che desideri. Scrivici un messaggio su <strong>Whatsapp</strong>!
    .column.has-background-secondary.has-background-secondary-3
      JLink.has-text-primary(:linkUrl="{url:'mailto:farmacialibertapn@gmail.com'}" linkClasses="navbar-item" linkIcon="email is-medium") farmacialibertapn@gmail.com
      div Vuoi richiedere <strong>ulteriori informazioni</strong>? Inviaci un’e-mail.
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'the-footer-top'
})
export default class TheFooterTopComponent extends Vue {}
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
    font-weight: 600!important;
  }
}
</style>
