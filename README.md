# NestJS undefined repo in npm package demo

## Steps to setup the project

Make sure inside .env a url to a working database is setup.

### Inside ./npm-package

- run `npm install`
- run `nest build` and `npm pack`

### Inside ./app

- run `npm install`
- run `npm i ../npm-package/Examplepackage-0.0.1.tgz`

### Starting the app (inside ./app)

- run `npm run start:dev`
- browse to `http://localhost:3002/example`

## Expected behaviour

In the console you should see a couple of console.logs, 1 `working` followed by an instance of a repository and 1 `failing` followed by `undefined`
