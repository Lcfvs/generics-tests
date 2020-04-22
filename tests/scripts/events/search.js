import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function search () {
  const uri = resolve('/events/search')

  const response = await fetch(uri, {})

  return {
    response,
    uri
  }
}
