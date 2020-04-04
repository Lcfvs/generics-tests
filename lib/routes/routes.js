export default (app, entities) => Object.values(entities)
  .forEach(entity => entity.routes(app))
