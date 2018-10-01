
const knex = require('knex')({
  client: 'pg',
  
  connection:
    {
      host: 'localhost',
      user: 'postgres',
      socketPath: '',
      password: '',
      database: 'test_timezone',
    },
  pool: {
    afterCreate: (conn, cb) => {
      conn.query(`SET timezone = 'UTC'`, err => {
        cb(err, conn);
      });
    }
  },
  useNullAsDefault: true
});

async function main() {
  await knex.schema.dropTableIfExists('counter')
  await knex.schema.createTable('counter', table => {
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
  
  await knex('counter').returning('id').insert({ amount: 5 });
  knex.destroy();
}


main();
