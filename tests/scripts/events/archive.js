import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function archive (config, { body: [body = {}] = [] } = {}) {
  const uri = resolve('/events/archive', body.id)

  const response = await fetch(uri, {
    ...config,
    query: {
      confirmation: '1'
    }
  })

  return {
    response,
    uri
  }
}
