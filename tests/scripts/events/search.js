import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function search (config) {
  const uri = resolve('/events/search')

  const response = await fetch(uri, {
    ...config
  })

  return {
    response,
    uri
  }
}
