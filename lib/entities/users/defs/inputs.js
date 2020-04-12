import parsers from '../../../parsers/parsers.js'
import table from './table.js'

const {
  columns: {
    id,
    createdDate,
    updatedDate,
    firstName,
    lastName,
    email
  },
  virtuals: {
    confirmation
  }
} = table

export default {
  archive: {
    params: {
      id: [
        parsers.misc.required(),
        ...id.parsers
      ]
    },
    query: {
      confirmation: [
        parsers.misc.required(),
        ...confirmation.parsers
      ]
    }
  },
  create: {
    body: {
      firstName: [
        parsers.misc.required(),
        ...firstName.parsers
      ],
      lastName: [
        parsers.misc.required(),
        ...lastName.parsers
      ],
      email: [
        parsers.misc.required(),
        ...email.parsers
      ]
    }
  },
  delete: {
    params: {
      id: [
        parsers.misc.required(),
        ...id.parsers
      ]
    },
    query: {
      confirmation: [
        parsers.misc.required(),
        ...confirmation.parsers
      ]
    }
  },
  find: {
    params: {
      id: [
        parsers.misc.required(),
        ...id.parsers
      ]
    }
  },
  search: {
    query: {
      createdDate: [
        parsers.misc.value(),
        ...createdDate.parsers
      ],
      updatedDate: [
        parsers.misc.value(),
        ...updatedDate.parsers
      ],
      firstName: [
        parsers.misc.value(),
        ...firstName.parsers
      ],
      lastName: [
        parsers.misc.value(),
        ...lastName.parsers
      ]
    }
  },
  update: {
    body: {
      firstName: [
        parsers.misc.required(),
        ...firstName.parsers
      ],
      lastName: [
        parsers.misc.required(),
        ...lastName.parsers
      ]
    },
    params: {
      id: [
        parsers.misc.required(),
        ...id.parsers
      ]
    }
  }
}
