<template lang="pug">
  p Loading the Prismic's Preview...
</template>
<script lang="ts">
export default {
  name: 'Preview',
  async asyncData({ app, query, redirect }) {
    const url = await app.$prismic.api.previewSession(query.token, app.$prismic.linkResolver, '/')
    redirect(url)
  }
}
</script>
