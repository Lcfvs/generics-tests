import hooks from '../../hooks/hooks.js'
import knex from '../../knex/knex.js'
import inputs from './inputs.js'
import table from './table.js'

const entity = {
  ...knex,
  table: table.name
}

export default (renderer, templates = {}) => ({
  archive: [
    ...hooks.request.input.all(inputs.archive),
    hooks.knex.archiveEntity(entity),
    renderer(({ entity }) => entity, templates.archive)
  ],
  create: [
    ...hooks.request.input.all(inputs.create),
    hooks.knex.createEntity(entity),
    renderer(({ entity }) => entity, templates.create)
  ],
  delete: [
    ...hooks.request.input.all(inputs.delete),
    hooks.knex.deleteEntity(entity),
    renderer(({ entity }) => entity, templates.delete)
  ],
  find: [
    ...hooks.request.input.all(inputs.find),
    hooks.knex.findEntity(entity),
    renderer(({ entity }) => entity, templates.find)
  ],
  search: [
    ...hooks.request.input.all(inputs.search),
    hooks.knex.searchEntities(entity),
    renderer(({ entities }) => entities, templates.search)
  ],
  update: [
    ...hooks.request.input.all(inputs.update),
    hooks.knex.updateEntity(entity),
    renderer(({ entity }) => entity, templates.update)
  ]
})
