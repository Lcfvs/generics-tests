import route from '@lcf.vs/generics/lib/express/route.js'
import process from 'process'
import '../bootstrap.js'
import dao from '../lib/dao/dao.js'
import app from './app.js'
import templates from './templates/templates.js'

route({ app, dao, templates })

app.listen(process.env.PORT || 8080)
