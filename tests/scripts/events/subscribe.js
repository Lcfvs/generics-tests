import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function subscribe (config, previous, messenger) {
  const uri = resolve('/events/subscribe')

  const response = await fetch(uri, {
    ...config,
    sse: true
  })

  response.on('message', messenger(uri))

  return {
    response,
    uri
  }
}
