import './bootstrap.js'
import { resolve } from 'path'

export const {
  development = {
    client: 'sqlite3',
    connection: {
      filename: resolve('./db.sqlite3')
    },
    migrations: {
      directory: resolve('./migrations')
    },
    seeds: {
      directory: resolve('./seeds')
    },
    useNullAsDefault: true
  }
} = {}
