<template lang="pug">
  .jampstart
    TheHeader
    nuxt
    TheFooter
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import TheHeader from '~/components/common/TheHeader.vue'
import TheFooter from '~/components/common/TheFooter.vue'

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class DefaultLayout extends Vue { }
</script>
