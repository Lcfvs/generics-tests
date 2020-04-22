import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function archive ({ body: [body = {}] = [] } = {}) {
  const uri = resolve('/events/archive', body.id)

  const response = await fetch(uri, {
    query: {
      confirmation: '1'
    }
  })

  return {
    response,
    uri
  }
}
