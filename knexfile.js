import cwd from './cwd.cjs'
import { resolve } from 'path'

export const {
  development = {
    client: 'sqlite3',
    connection: {
      filename: resolve(cwd, './db.sqlite3')
    },
    migrations: {
      directory: resolve(cwd, './migrations')
    },
    seeds: {
      directory: resolve(cwd, './seeds')
    },
    useNullAsDefault: true
  }
} = {}
