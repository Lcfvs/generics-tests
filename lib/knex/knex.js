import { env } from 'process'
import hooks from '@lcf.vs/generics/lib/knex/hooks/hooks.js'
import configure from '@lcf.vs/generics/lib/knex/qb.js'
import * as knexfile from '../../knexfile.js'

const qb = configure(knexfile[env.NODE_ENV || 'development'])

const knex = Object.freeze({
  archivedDate: 'archivedDate',
  createdDate: 'createdDate',
  id: 'id',
  updatedDate: 'updatedDate',
  qb
})

qb.addHook('before', 'select', '*', hooks.statements(knex))
qb.addHook('before', 'select', '*', hooks.archivedDate(knex))
qb.addHook('after', 'select', '*', hooks.rows(knex))
qb.addHook('before', 'insert', '*', hooks.id(knex))
qb.addHook('before', 'insert', '*', hooks.createdDate(knex))
qb.addHook('before', 'insert', '*', hooks.data(knex))
qb.addHook('before', 'insert', '*', hooks.statements(knex))
qb.addHook('before', 'update', '*', hooks.id(knex))
qb.addHook('before', 'update', '*', hooks.updatedDate(knex))
qb.addHook('before', 'update', '*', hooks.data(knex))
qb.addHook('before', 'update', '*', hooks.statements(knex))
qb.addHook('before', 'delete', '*', hooks.statements(knex))

export default knex
