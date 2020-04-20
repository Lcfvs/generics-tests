import { resolve } from 'path'
import { env } from 'process'
import './bootstrap.js'

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
  },
  production = {
    client: 'mysql2',
    connection: {
      host: env.DB_HOST,
      user: env.DB_USER,
      password: env.DB_PASS,
      database: env.DB_DATABASE
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
