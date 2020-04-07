import './cwd.cjs'
import { resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config({
  path: resolve('.env')
})
