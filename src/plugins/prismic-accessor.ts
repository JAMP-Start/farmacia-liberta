import { Plugin } from '@nuxt/types'
import { initializePrismic } from '~/utils/prismic'

const accessor: Plugin = ({ app }) => {
  initializePrismic(app.$prismic)
}

export default accessor
