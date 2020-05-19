<template lang="pug">
  JLink.post(:linkToResolve="post" :linkUrl="{slug: post.uid }")
    .post__image
      figure.image-cover
        picture
          prismic-image(:field="postData.image")
    .post__content
      h4.post__title {{ $prismic.asText(postData.title) }}
      div.post__excerpt {{ $prismic.asText(postData.content) | excerpt }}
      div.post__date {{ postData.date | date }}
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
.post {
  &__image {
    box-shadow: 0px 10px 20px $primary-dark;
    figure {
      padding-bottom: 100%;
    }
  }
  &__title {
    text-transform: uppercase;
    padding: 2rem 0 1.5rem 0;
    border-bottom: 2px solid $primary;
  }
  &__date {
    color: $secondary;
    font-weight: 600;
  }
  &__content {
    margin-bottom: 3rem;
    color: $black!important;
  }
  &__excerpt {
    padding: .5rem 0 1rem 0;
  }
}
</style>
