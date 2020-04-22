import fetch from '@lcf.vs/generics/lib/tester/fetch.js'
import resolve from '@lcf.vs/generics/lib/tester/resolve.js'
import date from '@lcf.vs/generics/lib/types/date/date.js'

export default async function create () {
  const uri = resolve('/events/create')

  const response = await fetch(uri, {
    body: {
      content: 'event content',
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post'
  })

  return {
    response,
    uri
  }
}
