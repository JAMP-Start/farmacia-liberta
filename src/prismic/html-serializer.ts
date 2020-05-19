import { RichText } from 'prismic-dom'

export default (type: any, element: any, content: any, children: any) => {

  if (type === RichText.Elements.preformatted) {
    console.log(children)
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

  if (type === RichText.Elements.hyperlink) {
    let result = ''
    const url = element.data.slug || element.data.url
    if (element.data.link_type === 'Document') {
      result = `<a href="/${url}">${content}</a>`
    } else {
      const target = element.data.target
        ? `target="'${element.data.target}'" rel="noopener"`
        : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  return null
}
