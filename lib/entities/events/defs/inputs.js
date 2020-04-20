import parsers from '../../../parsers/parsers.js'
import table from './table.js'

const {
  columns: {
    content,
    createdDate,
    endDate,
    id,
    startDate,
    updatedDate
  },
  virtuals: {
    confirmation
  }
} = table

export default {
  archive: {
    params: {
      ...id.parsers([
        parsers.misc.required()
      ])
    },
    query: {
      ...confirmation.parsers([
        parsers.misc.required()
      ])
    }
  },
  create: {
    body: {
      ...content.parsers([
        parsers.misc.required()
      ]),
      ...startDate.parsers([
        parsers.misc.required()
      ]),
      ...endDate.parsers([
        parsers.misc.required()
      ])
    }
  },
  delete: {
    params: {
      ...id.parsers([
        parsers.misc.required()
      ])
    },
    query: {
      ...confirmation.parsers([
        parsers.misc.required()
      ])
    }
  },
  find: {
    params: {
      ...id.parsers([
        parsers.misc.required()
      ])
    }
  },
  search: {
    query: {
      ...createdDate.parsers([
        parsers.misc.value()
      ]),
      ...content.parsers([
        parsers.misc.value()
      ]),
      ...updatedDate.parsers([
        parsers.misc.value()
      ])
    }
  },
  update: {
    body: {
      ...content.parsers([
        parsers.misc.value()
      ]),
      ...endDate.parsers([
        parsers.misc.value()
      ]),
      ...startDate.parsers([
        parsers.misc.value()
      ])
    },
    params: {
      ...id.parsers([
        parsers.misc.required()
      ])
    }
  },
  subscribe: {
  }
}
