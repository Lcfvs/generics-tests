import process from 'process'
import route from '@lcf.vs/generics/lib/express/route.js'
import '../bootstrap.js'
import knex from '../lib/knex/knex.js'
import hooks from '../lib/hooks/hooks.js'
import app from './app.js'
import templates from './templates/templates.js'

route(app, knex, hooks.response.renderer, templates)

app.listen(process.env.PORT || 8080)
