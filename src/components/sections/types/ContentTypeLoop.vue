<template lang="pug">
  section.section(:class="primary.section_classes")
    .container
      .content
        prismic-rich-text(:field="primary.content")
        JLink.is-pulled-right(:linkUrl="primary.button_link" linkClasses="link arrow") {{ primary.button_text }}
      .swiper-container#carousel(v-if="primary.display_as_carousel")
        .swiper-wrapper
          .swiper-slide(v-for="(item, index) in items" :key="index")
            JLink(:linkToResolve="item")
              article.media.media-centered
                .media-image(v-if="item.data.image")
                  figure.image-cover
                    picture
                      prismic-image(:field="item.data.image")
                .media-content.content.has-text-centered
                  h4(v-if="item.data.title") {{ $prismic.asText(item.data.title) }}
                  div(v-if="item.data.content") {{ $prismic.asText(item.data.content) | excerpt }}
                  div.date(v-if="item.data.date") {{ item.data.date | date }}
        .swiper-button-prev#prev
        .swiper-button-next#next
        .swiper-pagination
      .columns(v-else="")
        .column(v-for="(item, index) in items" :key="index" :class="`is-${12 / primary.columns_per_row}`")
          .box
            article.media
              .media-left(v-if="item.data.image")
                figure.image.is-128x128
                  prismic-image(:field="item.data.image")
              .media-content.content
                prismic-rich-text(v-if="item.data.title" :field="item.data.title")
                prismic-rich-text(v-if="item.data.content" :field="item.data.content")
                JLink(:linkToResolve="item", linkClasses="button") {{ strings.discoverMore }}
        JLink(:linkUrl="primary.button_link" linkClasses="link arrow") {{ primary.button_text }}

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import { Slice } from '~/types/Slice'

import { stringsStore } from '~/store'

@Component({
  name: 'content-type-loop'
})
export default class ContentTypeLoopComponent extends Vue {

  private _swiper: any

  mounted(): void {
    if (this.primary.display_as_carousel) {
      const swiperOptions: any = {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: this.primary.columns_per_row || 4,
            spaceBetween: 40
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '#next',
          prevEl: '#prev'
        }
      }
      const el = document.getElementById('carousel')
      this._swiper = new Swiper(el, swiperOptions)
    }
  }

  @Prop({
    type: Object,
    default: (): Slice => {
      return {
        primary: {},
        items: []
      }
    }
  })
  readonly data!: Slice

  get primary(): any {
    return this.data.primary
  }

  get items(): any {
    return this.data.items
  }

  get strings(): any {
    return stringsStore.strings
  }

}
</script>

<style lang="scss" scoped>
.media {
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 10px 20px $primary-dark;
  &-image figure {
    padding-bottom: 100%;
  }
  &-content {
    padding: 1rem;
    color: $black!important;
    .date {
      margin-top: .5rem;
      color: $secondary;
      font-weight: 600;
    }
  }
}
</style>
