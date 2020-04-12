import route from '@lcf.vs/generics/lib/express/route.js'
import date from '@lcf.vs/generics/lib/types/date/date.js'
import process from 'process'
import '../bootstrap.js'
import knex from '../lib/knex/knex.js'
import hooks from '../lib/hooks/hooks.js'
import app from '../utils/app.js'
import fetch from '../utils/fetch.js'
import log from '../utils/log.js'

route(app, knex, hooks.response.renderer)

async function test () {
  let response, uri

  uri = '/events/create'

  response = await fetch(uri, {
    body: {
      content: 'event content',
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post'
  })

  log({ [uri]: response })

  uri = `/events/update/${response.body.id}`

  response = await fetch(uri, {
    body: {
      content: `${response.body.content} (updated)`,
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post'
  })

  log({ [uri]: response })

  uri = `/events/find/${response.body.id}`

  response = await fetch(uri, {})

  log({ [uri]: response })

  uri = `/events/archive/${response.body.id}`

  response = await fetch(uri, {
    query: {
      confirmation: '1'
    }
  })

  log({ [uri]: response })

  uri = `/events/search`

  response = await fetch(uri, {
    query: {
      content: `${response.body.content}`
    }
  })

  log({ [uri]: response })
}

test()
  .catch(error => console.error(error))
  .finally(() => process.exit(0))
