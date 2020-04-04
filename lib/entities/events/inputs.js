import parsers from '../../parsers/parsers.js'
import columns from './columns.js'
import virtuals from './virtuals.js'

export default {
  archive: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    },
    query: {
      confirmation: [
        parsers.misc.required(),
        ...virtuals.confirmation
      ]
    }
  },
  create: {
    body: {
      content: [
        parsers.misc.required(),
        ...columns.content
      ],
      startDate: [
        parsers.misc.required(),
        ...columns.startDate
      ],
      endDate: [
        parsers.misc.required(),
        ...columns.endDate
      ]
    }
  },
  delete: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    },
    query: {
      confirmation: [
        parsers.misc.required(),
        ...virtuals.confirmation
      ]
    }
  },
  find: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    }
  },
  search: {
    query: {
      content: [
        ...columns.content
      ]
    }
  },
  update: {
    body: {
      content: [
        parsers.misc.required(),
        ...columns.content
      ],
      startDate: [
        parsers.misc.required(),
        ...columns.startDate
      ],
      endDate: [
        parsers.misc.required(),
        ...columns.endDate
      ]
    },
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    }
  }
}
