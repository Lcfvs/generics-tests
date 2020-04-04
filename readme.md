# @lcf.vs/generics-tests

[@lcf.vs/generics](https://github.com/Lcfvs/generics) tests repository


## Building

### 1# Describe your table & columns, based on [generics W3C parsers](https://github.com/Lcfvs/generics/tree/master/lib/validation/parsers/w3c)

**(values must be strings)**

#### Example
[./lib/entities/{name}/table.js](./lib/entities/events/table.js)


### 2-A# Create your entity column parsers

#### Example
[./lib/entities/{name}/columns.js](./lib/entities/events/columns.js)


### 2-B# Optionally, create your virtual column parsers

#### Example
[./lib/entities/{name}/virtuals.js](./lib/entities/events/virtuals.js)


### 3# Create your input parsers (`body` and/or `headers` and/or `params` and/or `query`)

#### Example
[./lib/entities/{name}/inputs.js](./lib/entities/events/inputs.js)


### 4# Create your hooks

#### Example
[./lib/entities/{name}/hooks.js](./lib/entities/events/hooks.js)


### 5# Create your routes

#### Example
[./lib/entities/{name}/routes.js](./lib/entities/events/routes.js)


### 6# Link them all to an entity module

#### Example
[./lib/entities/{name}/{name}.js](./lib/entities/events/events.js)


### 7# Link the entity module to the entities module

#### Example
[./lib/entities/entities.js](./lib/entities/entities.js)


### 8# Add your tests

#### Example
[./test.js](./test.js)


## Test it

`npm test`


## License

[MIT](./LICENSE)
