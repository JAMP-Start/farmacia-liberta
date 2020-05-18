import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import StringsModule from '~/store/strings'
import HeaderModule from '~/store/header'
import FooterModule from '~/store/footer'
import SocialModule from '~/store/social'
// import NavigationModule from '~/store/navigation'

/* eslint-disable */
let stringsStore: StringsModule
let headerStore: HeaderModule
let footerStore: FooterModule
let socialStore: SocialModule
// let navigationStore: NavigationModule
/* eslint-enable */

function initialiseStores(store: Store<any>): void {
  stringsStore = getModule(StringsModule, store)
  headerStore = getModule(HeaderModule, store)
  footerStore = getModule(FooterModule, store)
  socialStore = getModule(SocialModule, store)
  // navigationStore = getModule(NavigationModule, store)
}

export {
  initialiseStores,
  stringsStore,
  headerStore,
  footerStore,
  socialStore
  // navigationStore
}
