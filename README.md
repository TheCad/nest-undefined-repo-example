# NestJS undefined repo in npm package demo

## Steps to setup the project

### Inside ./npm-package

- run `npm install`
- run `nest build` and `npm pack`

### Inside ./app

- run `npm i ../npm-package/Examplepackage-0.0.1.tgz`
- run `npm install`

### Starting the app (inside ./app)

- run `docker compose up`
- run `npm run start:dev`
- browse to `http://localhost:3002/example`

## Expected behaviour

In the console you should see a couple of console.logs, 1 `working` followed by an instance of a repository and 1 `failing` followed by a list of `undefined`
