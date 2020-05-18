<template lang="pug">
  JLink(:linkToResolve="post" :linkUrl="{slug: post.uid }", linkClasses="box")
    .media-left
      prismic-image(:field="postData.image")
    .media-content
      h4 {{ $prismic.asText(postData.title) }}
      small {{ postData.date | date }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'post-card'
})
export default class PostCardComponent extends Vue {

  @Prop({ type: Object, default() { return {} } })
  post!: object

  get postData(): number {
    return this.post['data']
  }

}
</script>

<style lang="scss" scoped>
</style>
