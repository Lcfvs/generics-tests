import route from '@lcf.vs/generics/lib/express/route.js'
import date from '@lcf.vs/generics/lib/types/date/date.js'
import process from 'process'
import '../bootstrap.js'
import entities from '../lib/entities/entities.js'
import knex from '../lib/knex/knex.js'
import hooks from '../lib/hooks/hooks.js'
import app from '../utils/app.js'
import fetch from '../utils/fetch.js'
import log from '../utils/log.js'

route({
  app,
  entities,
  knex,
  renderer: hooks.response.renderer
})

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

  uri = `/events/update/${response.body.entity.id}`

  response = await fetch(uri, {
    body: {
      content: `${response.body.entity.content} (updated)`,
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post'
  })

  log({ [uri]: response })

  uri = `/events/find/${response.body.entity.id}`

  response = await fetch(uri, {})

  log({ [uri]: response })

  uri = `/events/archive/${response.body.entity.id}`

  response = await fetch(uri, {
    query: {
      confirmation: '1'
    }
  })

  log({ [uri]: response })

  uri = `/events/search`

  response = await fetch(uri, {
    query: {
      content: `${response.body.entity.content}`
    }
  })

  log({ [uri]: response })

  uri = '/users/create'

  response = await fetch('/users/create', {
    body: {
      firstName: 'my first name',
      lastName: 'my last name',
      email: 'my-account@mail.com'
    },
    method: 'post'
  })

  log({ [uri]: response })

  uri = `/users/find/${response.body.entity.id}`

  response = await fetch(uri, {})

  log({ found: response })

  uri = '/users/search'

  response = await fetch(uri, {
    query: {
      firstName: `${response.body.entity.firstName}`
    }
  })

  log({ [uri]: response })
}

test()
  .catch(error => console.error(error))
  .finally(() => process.exit(0))
