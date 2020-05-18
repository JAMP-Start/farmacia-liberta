<template lang="pug">
  .container-fluid
    Slice(v-for="(slice, index) in data.body",
      :data="slice",
      :key="index")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Slice from '~/components/sections/Slice.vue'

@Component({
  components: {
    Slice
  }
})
export default class ContactsPage extends Vue {

  data: any = {}

  async asyncData({ app, error }): Promise<any> {
    try {
      const { data } = await app.$prismic.api.getSingle('contacts')
      console.log(data)
      return { data }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'Contact Page Not Found' })
    }
  }

}
</script>
