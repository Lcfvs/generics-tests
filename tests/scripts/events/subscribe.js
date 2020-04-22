import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function subscribe (previous, messenger) {
  const uri = resolve('/events/subscribe')

  const response = await fetch(uri, {
    sse: true
  })

  response.on('message', messenger(uri))

  return {
    response,
    uri
  }
}
