import hooks from '../../hooks/hooks.js'
import knex from '../../knex/knex.js'
import inputs from './inputs.js'
import table from './table.js'

const entity = {
  ...knex,
  table: table.name
}

export default {
  archive: [
    ...hooks.request.input.all(inputs.archive),
    hooks.knex.archiveEntity(entity),
    hooks.lib.rendering.renderer(({ entity }) => entity)
  ],
  create: [
    ...hooks.request.input.all(inputs.create),
    hooks.knex.createEntity(entity),
    hooks.lib.rendering.renderer(({ entity }) => entity)
  ],
  delete: [
    ...hooks.request.input.all(inputs.delete),
    hooks.knex.deleteEntity(entity),
    hooks.lib.rendering.renderer(({ entity }) => entity)
  ],
  find: [
    ...hooks.request.input.all(inputs.find),
    hooks.knex.findEntity(entity),
    hooks.lib.rendering.renderer(({ entity }) => entity)
  ],
  search: [
    ...hooks.request.input.all(inputs.search),
    hooks.knex.searchEntities(entity),
    hooks.lib.rendering.renderer(({ entities }) => entities)
  ],
  update: [
    ...hooks.request.input.all(inputs.update),
    hooks.knex.updateEntity(entity),
    hooks.lib.rendering.renderer(({ entity }) => entity)
  ]
}
