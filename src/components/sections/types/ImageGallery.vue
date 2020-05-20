<template lang="pug">
  section.section.gallery(:class="`gallery--${primary.type} ${primary.section_classes}`")
    .container
      .gallery__title.content
        prismic-rich-text(:field="primary.title")
      .gallery__images.swiper-container(:id="primary.gallery_id")
        .swiper-wrapper
          .swiper-slide(v-for="(item, index) in items", :key="index" :class="{'image-cover': isGrid}")
            figure.image-cover
              picture
                prismic-image(:field="item.image")
        .swiper-button-prev(:id="`prev-${primary.gallery_id}`" v-if="!isGrid")
        .swiper-button-next(:id="`next-${primary.gallery_id}`" v-if="!isGrid")
        .swiper-pagination(:id="`pagination-${primary.gallery_id}`" v-if="!isGrid")
        //- .swiper-scrollbar
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import { Slice } from '~/types/Slice'

@Component({
  name: 'image-gallery'
})
export default class ImageGalleryComponent extends Vue {

  private _swiper: any

  mounted(): void {
    // Default Type: 'slider'
    let swiperOptions: any = {
      loop: true,
      pagination: {
        el: '#pagination-' + this.primary.gallery_id,
        type: 'bullets', // or fraction, progressbar
        clickable: true
      },
      navigation: {
        nextEl: '#next-' + this.primary.gallery_id,
        prevEl: '#prev-' + this.primary.gallery_id
      },
      effect: 'fade',
      speed: 500,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000
      }
    }
    // // Type: 'carousel
    if (this.galleryType === 'carousel') {
      swiperOptions = {
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 20,
        mousewheel: {
          forceToAxis: true,
          invert: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true
        },
        watchSlidesVisibility: true,
        freeMode: true,
        pagination: {
          el: '#pagination-' + this.primary.gallery_id,
          type: 'progressbar',
          clickable: true
        },
        navigation: {
          nextEl: '#next-' + this.primary.gallery_id,
          prevEl: '#prev-' + this.primary.gallery_id
        }
      }
    }

    if (this.galleryType !== 'grid') {
      const el = document.getElementById(this.primary.gallery_id)
      this._swiper = new Swiper(el, swiperOptions)
    } else {
      console.log('Type is grid, use lightbox instead.')
    }
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

  get galleryType(): any {
    return this.data.primary.type
  }

  get isGrid(): any {
    return this.data.primary.type === 'grid'
  }

}
</script>

<style lang="scss" scoped>
.gallery {
  &__images {
    max-height: 90vh;
  }
  &--carousel {
    .gallery__images {
      max-height: 60vh;

      .swiper-slide {
        max-width: 100%;
        width: auto;

        img {
          position: relative;
          max-height: 60vh;
        }
      }
    }
  }
  &--slider {
    figure {
      padding-bottom: 50%;
    }
  }
  .swiper-lazy-preloader {
    opacity: 0.5;
  }
  &--grid {
    .gallery__images .swiper-wrapper {
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1rem;
      figure {
        min-height: 300px;
      }
    }
  }
}
</style>
