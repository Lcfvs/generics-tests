import route from '@lcf.vs/generics/lib/express/route.js'
import date from '@lcf.vs/generics/lib/types/date/date.js'
import process from 'process'
import '../bootstrap.js'
import entities from '../lib/entities/entities.js'
import hooks from '../lib/hooks/hooks.js'
import app from '../utils/app.js'
import fetch from '../utils/fetch.js'
import log from '../utils/log.js'

route(app, entities, hooks.response.renderer, {
  // templates
})

async function test () {
  let response

  response = await fetch('/events/create', {
    body: {
      content: 'event content',
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post'
  })

  log({ created: response })

  response = await fetch(`/events/update/${response.body.id}`, {
    body: {
      content: `${response.body.content} (updated)`,
      startDate: date.toW3CDatetime(new Date(), true),
      endDate: date.toW3CDatetime(date.addDays(new Date(), 1), true)
    },
    method: 'post'
  })

  log({ updated: response })

  response = await fetch(`/events/find/${response.body.id}`, {
    method: 'get'
  })

  log({ found: response })

  response = await fetch(`/events/archive/${response.body.id}`, {
    method: 'get',
    params: {
      id: `${response.body.id}`
    },
    query: {
      confirmation: '1'
    }
  })

  log({ archived: response })

  response = await fetch('/events/search', {
    method: 'get',
    query: {
      content: `${response.body.content}`
    }
  })

  log({ searched: response })
}

test()
  .catch(error => console.error(error))
  .finally(() => process.exit(0))
