import knex from 'knex';

import environments from './knexfile'


// eslint-disable-next-line import/namespace
const knexClient = knex(environments['development']);
export default knexClient;
