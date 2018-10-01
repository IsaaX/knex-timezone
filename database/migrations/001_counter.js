
export async function up(knex) {
  return knex.schema.createTable('counter', table => {
    table.increments();
    table.integer('amount').notNull();
    
    
    table
      .datetime('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .datetime('updatedAt')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable('counter');
}
