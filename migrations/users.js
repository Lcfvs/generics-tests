export function up (qb) {
  return qb.schema
    .createTable('users', table => {
      table.dateTime('createdDate').nullable()
      table.dateTime('updatedDate').nullable()
      table.dateTime('archivedDate').nullable()
      table.increments('id').primary()
      table.string('firstName').nullable()
      table.string('lastName').nullable()
      table.string('email').nullable()
    })
}

export function down (qb) {
  return qb.schema
    .dropTable('users')
}
