import entity from '../../../dao/entity.js'

export default {
  name: 'events',
  columns: {
    ...entity.columns,
    ...entity.column.text('content', {
      maxlength: '100',
      minlength: '3'
    }),
    ...entity.column.datetimeWithSeconds('startDate'),
    ...entity.column.datetimeWithSeconds('endDate')
  },
  virtuals: {
    ...entity.column.boolean('confirmation')
  }
}
