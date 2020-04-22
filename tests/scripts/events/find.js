import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function find ({ body }) {
  const uri = resolve('/events/find', body.id)

  const response = await fetch(uri, {})

  return {
    response,
    uri
  }
}
