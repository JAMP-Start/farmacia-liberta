import Prismic from 'prismic-javascript'
import ResolvedApi from 'prismic-javascript/d.ts/ResolvedApi'

let api: ResolvedApi

export default async function routes(): Promise<any> {
  try {
    api = await Prismic.getApi('https://farmacialiberta.cdn.prismic.io/api/v2')

    const posts = await postsResolver()
    const pages = await pagesResolver()

    return [posts, pages].reduce((acc: string[], paths: string[]) => {
      return acc.concat(paths)
    }, [])
  } catch (e) {
    console.log(e)
  }
}

async function postsResolver(): Promise<string[]> {
  const { results } = await api.query(
    Prismic.Predicates.at('document.type', 'post'),
    { pageSize: 100, fetch: ['title'], lang: '*' }
  )
  return results.map(post => `/eventi/${post.uid}`)
}

async function pagesResolver(): Promise<string[]> {
  const { results } = await api.query(
    Prismic.Predicates.at('document.type', 'page'),
    { pageSize: 100, fetch: ['title'], lang: '*' }
  )
  return results.map(page => `/${page.uid}`)
}
