import attempt from '@lcf.vs/generics/lib/express/attempt.js'
import hooks from '../lib/hooks/hooks.js'

export default app => {
  app.post('/events/create', attempt(hooks.entities.events.create))
  app.get('/events/search', attempt(hooks.entities.events.search))
  app.get('/events/find/:id', attempt(hooks.entities.events.find))
  app.post('/events/update/:id', attempt(hooks.entities.events.update))
  app.get('/events/archive/:id', attempt(hooks.entities.events.archive))
  app.get('/events/delete/:id', attempt(hooks.entities.events.delete))
}
