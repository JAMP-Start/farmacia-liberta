const linkResolver = (doc: any): string => {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'post') {
    return '/blog/' + doc.uid
  }

  return '/not-found'
}

export default linkResolver
