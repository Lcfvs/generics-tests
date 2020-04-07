import dotenv from 'dotenv'
import { resolve } from 'path'
import './cwd.cjs'

dotenv.config({
  path: resolve('.env')
})
