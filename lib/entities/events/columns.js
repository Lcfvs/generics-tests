import parsers from '../../parsers/parsers.js'
import table from './table.js'

const {
  columns: {
    content,
    createdDate,
    endDate,
    id,
    startDate,
    updatedDate
  }
} = table

export default {
  content: [
    ...parsers.w3c.string.all(content)
  ],
  createdDate: [
    ...parsers.w3c.datetime.all(createdDate)
  ],
  endDate: [
    ...parsers.w3c.datetime.all(endDate)
  ],
  id: [
    ...parsers.w3c.number.all(id)
  ],
  startDate: [
    ...parsers.w3c.datetime.all(startDate)
  ],
  updatedDate: [
    ...parsers.w3c.datetime.all(updatedDate)
  ]
}
