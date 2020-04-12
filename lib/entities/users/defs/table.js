import entity from '../../../knex/entity.js'

export default {
  name: 'users',
  columns: {
    ...entity.columns,
    firstName: entity.column.text('firstName', {
      maxlength: '100',
      minlength: '3'
    }),
    lastName: entity.column.text('lastName', {
      maxlength: '100',
      minlength: '3'
    }),
    email: entity.column.email('email', {
      maxlength: '100',
      minlength: '3'
    })
  },
  virtuals: {
    confirmation: entity.column.boolean('confirmation')
  }
}
