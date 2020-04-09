import parsers from '../../parsers/parsers.js'
import table from './table.js'

const {
  virtuals: {
    confirmation
  }
} = table

export default {
  confirmation: [
    parsers.w3c.boolean.type(confirmation)
  ]
}
