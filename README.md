EXPRESS JS API

step install express in your computer (tested in windows 10) : 
- install nodejs / install mysql/nosql (bebas)
- run npm install -g express-generator
- change root directory project dan run "express --no-view latihan-express-api" for create structure folder 
- run "npm install" and try to run "npm start"
- run "npm i dotenv --save"
- run "npm install --save sequelize sequelize-cli" - reff : https://sequelize.org/docs/v6/getting-started/ -> run "npx sequelize"
- run "npx sequelize init" for generated the folder seeders/migrations/models
- run "npm install mysql2 --save"


note for "step install" :
- after run "sequelize init" please customize sequelize manually like on .env , config.js, - optional apps.js (line 1)

npx sequelize : 
- create table example : "npx sequelize migration:create --name create-users_table" 
- set your migrate - read doc : https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
- run "sequelize db:migrate"

optional : 
- npm install -g nodemon (for update code and refresh without stop the npm start global)
