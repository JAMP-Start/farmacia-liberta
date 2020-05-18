<template lang="pug">
  .container
    .modal.fadeUp(:class="{ 'is-active': isActive }")
      .modal-background
      button.modal-close.is-large(@click.prevent="togglePopup" aria-label="close")
      .modal-card
        header.modal-card-head
          .modal-card-title
            prismic-rich-text(v-if="primary.title" :field="primary.title")
            slot(name="modal_header")
          button.delete(@click.prevent="togglePopup" aria-label="close")
        section.modal-card-body
          prismic-rich-text(v-if="primary.content" :field="primary.content")
          slot(name="modal_content")
        footer.modal-card-foot
          button.button.is-success Save changes
          button.button(@click.prevent="togglePopup") Cancel
    .modal-trigger.button(v-if="primary.trigger_type === 'button'" @click.prevent="togglePopup")
      span(v-if="primary.trigger_button_label") {{ primary.trigger_button_label }}
      slot(name="modal_trigger_button_label")

  //- USAGE AS COMPONENT
  //- import Popup from '~/components/sections/types/Popup.vue'
  //- Popup(:data="{ primary: { trigger_type: 'button' } }") // or primary: { trigger_type: 'delay', trigger_delay: 1000 }
  //-   template(slot="modal_header")
  //-     h1 the popup title
  //-   template(slot="modal_content")
  //-     p the modal content
  //-   template(slot="modal_trigger_button_label")
  //-     span Apriti sesamo
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { Slice } from '~/types/Slice'

@Component({
  name: 'popup'
})
export default class PopupComponent extends Vue {

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

  isActive: boolean = false

  mounted() {
    if (this.primary.trigger_type === 'delay') {
      setTimeout(() => {
        if (!this.getCookie(this.primary.id).length) {
          this.isActive = true
          this.setCookie(this.primary.id, 'opened', 2)
        }
      }, this.primary.trigger_delay || 1000)
    }
  }

  togglePopup() {
    this.isActive = !this.isActive
  }

  setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date()
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + d.toUTCString()
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/'
  }

  getCookie(cookieName) {
    const name = cookieName + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  get primary(): any {
    return this.data.primary
  }

  get items(): any {
    return this.data.items
  }

}
</script>

<style lang="scss" scoped>
.modal {
  &.fadeUp {
    display: flex;
    opacity: 0;
    z-index: -1;
    transition: opacity .4s;
    .modal-card {
      transition: transform .4s;
      transform: translateY(2rem)
    }
    &.is-active {
      z-index: 3;
      opacity: 1;
      .modal-card {
        transform: translateY(0)
       }
    }
  }
}
</style>
