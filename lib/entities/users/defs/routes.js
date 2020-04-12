import attempt from '@lcf.vs/generics/lib/express/attempt.js'

export default (app, hooks) => {
  app.post('/users/create', attempt(hooks.create))
  app.get('/users/search', attempt(hooks.search))
  app.get('/users/find/:id', attempt(hooks.find))
  app.post('/users/update/:id', attempt(hooks.update))
  app.get('/users/archive/:id', attempt(hooks.archive))
  app.get('/users/delete/:id', attempt(hooks.delete))
}
