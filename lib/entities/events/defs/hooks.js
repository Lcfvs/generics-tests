import hooks from '../../../hooks/hooks.js'
import emitter from './emitter.js'
import inputs from './inputs.js'
import table from './table.js'
import viewers from './viewers.js'

export default ({
  dao,
  templates
}) => ({
  archive: [
    ...hooks.request.input.all(inputs.archive),
    hooks.request.xhr(),
    hooks.knex.archiveEntity(dao, table),
    hooks.response.viewer(viewers.entity),
    hooks.response.emitter(emitter),
    hooks.response.renderer(templates.archive)
  ],
  create: [
    ...hooks.request.input.all(inputs.create),
    hooks.request.xhr(),
    hooks.knex.createEntity(dao, table),
    hooks.response.viewer(viewers.entity),
    hooks.response.emitter(emitter),
    hooks.response.renderer(templates.create)
  ],
  delete: [
    ...hooks.request.input.all(inputs.delete),
    hooks.request.xhr(),
    hooks.knex.deleteEntity(dao, table),
    hooks.response.viewer(viewers.entity),
    hooks.response.emitter(emitter),
    hooks.response.renderer(templates.delete)
  ],
  find: [
    ...hooks.request.input.all(inputs.find),
    hooks.request.xhr(),
    hooks.knex.findEntity(dao, table),
    hooks.response.viewer(viewers.entity),
    hooks.response.renderer(templates.find)
  ],
  search: [
    ...hooks.request.input.all(inputs.search),
    hooks.request.xhr(),
    hooks.knex.searchEntities(dao, table),
    hooks.response.viewer(viewers.entities),
    hooks.response.renderer(templates.search)
  ],
  subscribe: [
    ...hooks.request.input.all(inputs.subscribe),
    hooks.response.subscriber(emitter, table.name, [
      hooks.response.renderer(templates.find)
    ]),
    hooks.knex.searchEntities(dao, table),
    hooks.response.viewer(viewers.entities),
    hooks.response.renderer()
  ],
  update: [
    ...hooks.request.input.all(inputs.update),
    hooks.request.xhr(),
    hooks.knex.updateEntity(dao, table),
    hooks.response.viewer(viewers.entity),
    hooks.response.emitter(emitter),
    hooks.response.renderer(templates.update)
  ]
})
