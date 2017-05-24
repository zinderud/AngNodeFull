# AngNodeFull

first 
//config /config.json 
"dialect": "mysql" or  PostgreSQL, SQLite and MSSQL 
`{
  "development": {
    "username": "root",
    "password": "zinderud",
    "database": "node_ang_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "zinderud",
    "database": "node_ang_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable":"DATABASE_URL",
    "dialect": "mysql"
  }`
}
  
Run `npm run postinstall` 
## Development server
 npm 
Run `npm run dev` for a dev server.
 Navigate to `http://localhost:4200/`.
 this api to `http://localhost:8000/`.


  The app will automatically reload if you change any of the source files.
## Product server

Run `npm run prod` for a dev server.
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.



## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

 
