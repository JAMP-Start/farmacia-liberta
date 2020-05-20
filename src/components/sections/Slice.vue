<template lang="pug">
  component(:is="sliceType", :data="data")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ExampleSection from './types/ExampleSection.vue'
import ContentSection from './types/ContentSection.vue'
import VideoSection from './types/VideoSection.vue'
import Banner from './types/Banner.vue'
import ImageGallery from './types/ImageGallery.vue'
import EmptySpace from './types/EmptySpace.vue'
import Columns from './types/Columns.vue'
import BoxGrid from './types/BoxGrid.vue'
import TwoColumnsWithImageSection from './types/TwoColumnsWithImageSection.vue'
import ContentTypeLoop from './types/ContentTypeLoop.vue'
import MapSection from './types/MapSection.vue'
import Popup from './types/Popup.vue'
import TableComponent from './types/TableComponent.vue'
import HomeHours from './types/HomeHours.vue'
import HomeAbout from './types/HomeAbout.vue'

import { Slice } from '~/types/Slice'

@Component({
  name: 'slice',
  components: {
    ExampleSection,
    ImageGallery,
    Banner,
    EmptySpace,
    ContentSection,
    VideoSection,
    Columns,
    BoxGrid,
    TwoColumnsWithImageSection,
    ContentTypeLoop,
    MapSection,
    Popup,
    TableComponent,
    HomeHours,
    HomeAbout
  }
})
export default class SliceComponent extends Vue {

  @Prop({
    type: Object,
    default: (): Slice => {
      return {
        slice_type: '',
        slice_label: '',
        primary: {},
        items: []
      }
    }
  })
  readonly data!: Slice

  get sliceType(): string {
    return this.data.slice_type!.replace(/_/g, '-')
  }

}
</script>
