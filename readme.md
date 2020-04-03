# @lcf.vs/generics-tests

[@lcf.vs/generics](https://github.com/Lcfvs/generics) tests repository


## Building

### 1# Create your entities

#### Example
[./lib/entities/{name}/{name}.js](./lib/entities/events/events.js)

Then link it to the parent module


### 2# Create your entity column parsers

#### Example
[./lib/parsers/{name}/columns.js](./lib/parsers/events/columns.js)


### 3# Create your entity route specific parsers

#### Example
[./lib/parsers/{name}/{name}.js](./lib/parsers/events/events.js)

Then link it to the parent module


### 4# Create your route hooks

#### Example
[./lib/hooks/{name}/{name}.js](./lib/hooks/events/events.js)

Then link it to the parent module


### 5# Register your routes

#### Example
[./routes/routes.js](./routes/routes.js)


## Test it

`npm test`


## License

[MIT](./LICENSE)
