export default {
  name: 'events',
  columns: {
    id: {
      name: 'id',
      min: '1',
      step: '1',
      type: 'number'
    },
    createdDate: {
      name: 'createdDate',
      min: '1970-01-01T00:00',
      required: '',
      step: '1',
      type: 'datetime'
    },
    updatedDate: {
      name: 'updatedDate',
      min: '1970-01-01T00:00',
      step: '1',
      type: 'datetime',
      value: ''
    },
    archivedDate: {
      name: 'archivedDate',
      min: '1970-01-01T00:00',
      step: '1',
      type: 'datetime',
      value: null
    },
    content: {
      name: 'content',
      maxlength: '100',
      minlength: '3',
      required: '',
      type: 'text'
    },
    startDate: {
      name: 'startDate',
      min: '1970-01-01T00:00',
      required: '',
      step: '1',
      type: 'datetime',
      value: null
    },
    endDate: {
      name: 'endDate',
      min: '1970-01-01T00:00',
      required: '',
      step: '1',
      type: 'datetime',
      value: null
    }
  },
  virtuals: {
    confirmation: {
      name: 'confirmation',
      type: 'boolean'
    }
  }
}
