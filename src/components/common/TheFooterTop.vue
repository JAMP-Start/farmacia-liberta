<template lang="pug">
  .footer__top.columns.mb-0.container-fluid
    .column.p-6.has-background-secondary.has-background-secondary-1
      JLink.has-text-primary(:linkUrl="{url:'tel:+39043440493'}" linkClasses="navbar-item" linkIcon="phone 2x") +39 0434 40493
      div Siamo sempre a tua disposizione per <strong>consigli e indicazioni terapeutiche</strong>.
    .column.p-6.has-background-secondary.has-background-secondary-2
      JLink.has-text-primary(:linkUrl="{url:'https://wa.me/393496871399', target: '_blank'}" linkClasses="navbar-item" linkIcon="whatsapp 2x") +39 0434 40493
      div <strong>Prenota il prodotto</strong> che desideri. Scrivici un messaggio su <strong>Whatsapp</strong>!
    .column.p-6.has-background-secondary.has-background-secondary-3
      JLink.has-text-primary(:linkUrl="{url:'mailto:farmacialibertapn@gmail.com'}" linkClasses="navbar-item" linkIcon="email 2x") farmacialibertapn@gmail.com
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
  a.navbar-item.has-icon {
    font-weight: 600!important;
  }
}
</style>
