function route ([name, entity]) {
  const { app, renderer, templates } = this

  entity.routes(app, entity.hooks(renderer, templates[name]))
}

export default (app, entities, renderer, templates = {}) => {
  Object.entries(entities)
    .forEach(route, {
      app,
      renderer,
      templates
    })
}
