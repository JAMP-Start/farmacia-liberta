<template lang="pug">
  section.section.testimonial#testimonial-section(:class="primary.section_classes")
    figure.image-cover.image-cover--full
      picture
        img(src="https://images.prismic.io/farmacialiberta/d6486410-9d48-411c-9a1d-865c1252c276_christiann-koepke-5SsFQ6oNbX4-unsplash%402x.png?auto=compress,format&rect=0,0,664,372&w=1500&h=840")
    .container.content.has-text-centered
      prismic-rich-text(:field="primary.content")
      .quote
      .swiper-container#testimonial.pb-0
        .swiper-wrapper
          .swiper-slide(v-for="(item, index) in items", :key="index")
            .testimonial__item
              prismic-rich-text.testimonial__item__content(:field="item.content")
              prismic-rich-text.testimonial__item__author(:field="item.author")
        .swiper-button-prev#prev-testimonial
        .swiper-button-next#next-testimonial
        //- .swiper-pagination#pagination-testimonial
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import { Slice } from '~/types/Slice'

@Component({
  name: 'testimonial'
})
export default class TestimonialComponent extends Vue {

  private _swiper: any

  mounted(): void {
    const swiperOptions: any = {
      loop: true,
      // pagination: {
      //   el: '#pagination-testimonial',
      //   type: 'bullets', // or fraction, progressbar
      //   clickable: true
      // },
      navigation: {
        nextEl: '#next-testimonial',
        prevEl: '#prev-testimonial'
      },
      effect: 'slide',
      speed: 500,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000
      }
    }
    const el = document.getElementById('testimonial')
    this._swiper = new Swiper(el, swiperOptions)
  }

  // destroyed(): void {
  //   this._swiper.destroy(true, true)
  //   this._swiper = null
  // }

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

}
</script>

<style lang="scss" scoped>
.testimonial {
  figure {
    background-color: $primary;
    opacity: .1;
    img {
      filter: saturate(0);
      mix-blend-mode: screen;
      object-position: 80% 50%;
    }
  }
  &__item {
    max-width: 600px;
    margin: 0 auto;
    &__content {
      padding: 3rem 0 2rem 0;
      font-style: italic;
    }
    &__author {
      color: $primary!important;
      font-weight: 600;
    }
  }
  .quote {
    height: 90px;
    &:after {
      content: '“';
      color: $primary;
      font-size: 12rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
