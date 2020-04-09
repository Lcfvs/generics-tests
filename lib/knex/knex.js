import configure from '@lcf.vs/generics/lib/knex/qb.js'
import { env } from 'process'
import * as knexfile from '../../knexfile.js'

export default configure(knexfile[env.NODE_ENV || 'development'])
