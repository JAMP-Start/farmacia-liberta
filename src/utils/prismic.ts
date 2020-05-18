// eslint-disable-next-line import/no-mutable-exports
let $prismic: any

export function initializePrismic(prismicInstance: any) {
  $prismic = prismicInstance
}

export { $prismic }
