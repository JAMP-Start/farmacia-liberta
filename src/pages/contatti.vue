<template lang="pug">
  div.contacts-page
    PageHeader(:data="data" :noOverlay="true")
    TheFooterTop
    .container-fluid
      Slice(v-for="(slice, index) in data.body",
        :data="slice",
        :key="index")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import PageHeader from '~/components/common/PageHeader.vue'
import TheFooterTop from '~/components/common/TheFooterTop.vue'
import Slice from '~/components/sections/Slice.vue'

import seo from '~/utils/seo.ts'

@Component({
  components: {
    PageHeader, TheFooterTop, Slice
  },
  head() {
    const { data, lang } = this.$data
    return seo(data, lang, this.$route.path)
  }
})
export default class ContactsPage extends Vue {

  data: any = {}

  async asyncData({ app, error }): Promise<any> {
    try {
      const { data } = await app.$prismic.api.getSingle('contacts')
      return { data }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'Contact Page Not Found' })
    }
  }

}
</script>

<style>
  .contatti footer .footer__top {
    display: none!important;
  }
</style>
