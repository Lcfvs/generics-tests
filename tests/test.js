import route from '@lcf.vs/generics/lib/express/route.js'
import app from '@lcf.vs/generics/lib/tester/app.js'
import process from 'process'
import '../bootstrap.js'
import dao from '../lib/dao/dao.js'
import scripts from './scripts/scripts.js'

route({ app, dao })

scripts()
  .catch(error => console.error(error))
  .finally(() => process.exit(0))
