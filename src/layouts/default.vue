<template lang="pug">
  .jampstart(:class="$route.name")
    TheTopbar
    TheHeader
    nuxt
    TheFooter
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import TheHeader from '~/components/common/TheHeader.vue'
import TheFooter from '~/components/common/TheFooter.vue'
import TheTopbar from '~/components/common/TheTopbar.vue'

@Component({
  components: {
    TheHeader,
    TheFooter,
    TheTopbar
  }
})
export default class DefaultLayout extends Vue { }
</script>
