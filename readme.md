# @lcf.vs/generics-tests

[@lcf.vs/generics](https://github.com/Lcfvs/generics) tests repository


## Building


### 1# Create your `knex` migrations

#### Example
[./migrations/{name}.js](./migrations/events.js)


### 2# Run your migrations

`npm run knex migrate:latest`


### 3# Describe your table & columns, based on [generics W3C parsers](https://github.com/Lcfvs/generics/tree/master/lib/validation/parsers/w3c)

**(values must be strings)**

#### Example
[./lib/entities/{name}/table.js](./lib/entities/events/table.js)


### 4# Create your entity column parsers

#### Example
[./lib/entities/{name}/columns.js](./lib/entities/events/columns.js)


### 4-optional# Create your virtual column parsers

#### Example
[./lib/entities/{name}/virtuals.js](./lib/entities/events/virtuals.js)


### 5# Create your input parsers (`body` and/or `headers` and/or `params` and/or `query`)

#### Example
[./lib/entities/{name}/inputs.js](./lib/entities/events/inputs.js)


### 6# Create your hooks

#### Example
[./lib/entities/{name}/hooks.js](./lib/entities/events/hooks.js)


### 7# Create your routes

#### Example
[./lib/entities/{name}/routes.js](./lib/entities/events/routes.js)


### 8# Link them all to an entity module

#### Example
[./lib/entities/{name}/{name}.js](./lib/entities/events/events.js)


### 9# Link the entity module to the entities module

#### Example
[./lib/entities/entities.js](./lib/entities/entities.js)


### 10# Add your tests

#### Example
[./test.js](./test.js)


### 11# Test it

`npm test`


## License

[MIT](./LICENSE)
