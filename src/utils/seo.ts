import PrismicDom from 'prismic-dom'
import { isEmpty } from 'lodash'

const siteName = 'Farmacia Libertà'
const languages = {
  it: 'Farmacia a Pordenone.',
  en: 'Farmacy in Pordenone.'
}
const base = process.env.DOMAIN

export default (data: any, lang: string, route: string): any => {
  if (!data) {
    return {
      title: '404'
    }
  }

  console.log(data)

  const title = data.seo_title || PrismicDom.RichText.asText(data.title) + ' | ' + siteName
  const description = data.seo_description || (data.page_subtitle ? PrismicDom.RichText.asText(data.page_subtitle) : languages[lang])

  let image = `${base}/images/placeholder.png`

  if (!isEmpty(data.seo_image)) {
    image = data.seo_image.url
  } else if (!isEmpty(data.image)) {
    image = data.image.url
  }

  const head = {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: data.seo_keywords || ''
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${base}${route}`
      }
    ]
  }

  return head
}
