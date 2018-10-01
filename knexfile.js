// Update with your config settings.
require('dotenv/config');
require('babel-register')({ presets: ['env'] });
require('babel-polyfill');

module.exports = {

  development: {
    client: 'pg',
  
    connection:
      {
        host: 'localhost',
        user: 'postgres',
        socketPath: '',
        password: '',
        database: 'test_timezone',
        ssl: '',
        multipleStatements: true,
        charset: 'utf8'
      },
    pool: {
      afterCreate: (conn, cb) => {
        conn.query(`SET timezone = 'UTC'`, err => {
          cb(err, conn);
        });
      }
    },
    seeds: { directory: './database/seeds' },
    migrations: { directory: './database/migrations' },
    useNullAsDefault: true
  },
};
