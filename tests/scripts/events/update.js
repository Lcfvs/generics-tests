import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function update ({ body }) {
  const uri = resolve('/events/update', body.id)

  const response = await fetch(uri, {
    body: {
      content: `${body.content} (updated)`
    },
    method: 'post'
  })

  return {
    response,
    uri
  }
}
