# @lcf.vs/generics-tests

[@lcf.vs/generics](https://github.com/Lcfvs/generics) tests repository


## Install

`git clone https://github.com/Lcfvs/generics-tests`

`cd generics-tests`

`npm i --save-dev`


## Building


### 1# Create your `knex` migrations

#### Example
[./migrations/{name}.js](./migrations/events.js)


### 2# Run your migrations

`npm run latest`


### 3# Describe your table & columns, based on [generics W3C parsers](https://github.com/Lcfvs/generics/tree/master/lib/validation/parsers/w3c)

**(values must be strings)**

#### Example
[./lib/entities/{name}/defs/table.js](./lib/entities/events/defs/table.js)


### 4# Create your hooks

#### Example
[./lib/entities/{name}/defs/hooks.js](./lib/entities/events/defs/hooks.js)


### 5# Create your routes

#### Example
[./lib/entities/{name}/defs/routes.js](./lib/entities/events/defs/routes.js)


### 6# Link them all to an entity module

#### Example
[./lib/entities/{name}/{name}.js](./lib/entities/events/events.js)


### 7# Link the entity module to the entities module

#### Example
[./lib/entities/entities.js](./lib/entities/entities.js)


### 8# Add your tests

#### Example
[./tests/test.js](./tests/test.js)


### 9# Test it

`npm test`


## License

[MIT](./LICENSE)
