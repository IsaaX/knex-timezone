require('babel-register')({ presets: ['env'] });
require('babel-polyfill');
const config = require('./knexfile')

console.info(config)
const knex = require('knex')(config['development']);

async function main() {
  await knex('counter').returning('id').insert({ amount: 5 });
  knex.destroy();
}

main();
