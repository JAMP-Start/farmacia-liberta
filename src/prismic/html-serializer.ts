import { RichText, Link } from 'prismic-dom'
import linkResolver from './link-resolver'

export default (type: any, element: any, content: any, children: any) => {

  if (type === RichText.Elements.preformatted) {
    return `${element.text}`
  }
  // if (type === RichText.Elements.heading2) {
  //   if (element.spans.length && element.spans[0].data.label === 'special') {
  //     return `<div class="title--special"><h2>${element.text}</h2><span>${element.text}</span></div>`
  //   } else {
  //     return `<h2>${children.join('')}</h2>`
  //   }
  // }
  if (type === RichText.Elements.heading2) {
    return `<div class="title--special"><h2>${element.text}</h2><span>${element.text}</span></div>`
  }
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this
  if (type === RichText.Elements.hyperlink) {
    let result = ''
    const url = Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<nuxt-link to="${url}">${content}</nuxt-link>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  // Return null to stick with the default behavior for everything else
  return null
}
