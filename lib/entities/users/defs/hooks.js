import hooks from '../../../hooks/hooks.js'
import inputs from './inputs.js'
import table from './table.js'

export default ({
  knex,
  renderer,
  templates = {}
}) => ({
  archive: [
    ...hooks.request.input.all(inputs.archive),
    hooks.knex.archiveEntity(knex, table),
    renderer(context => context, templates.archive)
  ],
  create: [
    ...hooks.request.input.all(inputs.create),
    hooks.knex.createEntity(knex, table),
    renderer(context => context, templates.create)
  ],
  delete: [
    ...hooks.request.input.all(inputs.delete),
    hooks.knex.deleteEntity(knex, table),
    renderer(context => context, templates.delete)
  ],
  find: [
    ...hooks.request.input.all(inputs.find),
    hooks.knex.findEntity(knex, table),
    renderer(context => context, templates.find)
  ],
  search: [
    ...hooks.request.input.all(inputs.search),
    hooks.knex.searchEntities(knex, table),
    renderer(context => context, templates.search)
  ],
  update: [
    ...hooks.request.input.all(inputs.update),
    hooks.knex.updateEntity(knex, table),
    renderer(context => context, templates.update)
  ]
})
