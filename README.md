Steps taken to setup:

    yarn



psql
> create database test_timezone;




Once setup:

1. Run the migration
1. run `node main.js` or run the seed to see the same result.
1. View in the database, the `knex.fn.now()` provides a localtime instead of timestamp with tz. 





Mini script for iteration:

yarn knex migrate:rollback && yarn knex migrate:latest && yarn knex seed:run
