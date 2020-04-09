import route from '@lcf.vs/generics/lib/express/route.js'
import '../bootstrap.js'
import entities from '../lib/entities/entities.js'
import hooks from '../lib/hooks/hooks.js'
import app from './app.js'
import templates from './templates/templates.js'

route(app, entities, hooks.response.renderer, templates)
