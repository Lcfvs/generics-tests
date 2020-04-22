import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'

export default async function home () {
  const uri = resolve('/')

  const response = await fetch(uri, {})

  return {
    response,
    uri
  }
}
