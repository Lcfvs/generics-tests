import entity from '../../../dao/entity.js'

export default {
  name: 'events',
  columns: {
    ...entity.columns,
    content: entity.column.text('content', {
      maxlength: '100',
      minlength: '3'
    }),
    startDate: entity.column.datetimeWithSeconds('startDate'),
    endDate: entity.column.datetimeWithSeconds('endDate')
  },
  virtuals: {
    confirmation: entity.column.boolean('confirmation')
  }
}
