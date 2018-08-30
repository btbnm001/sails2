//-- create angular project --//
- npm install -g @angular/cli
- ng new c65Client
- cd c65Client
- ng serve
- ng generate module app-routing --flat --module=app

//-- insstall bootrap --//
- npm install bootstrap —save
- style.css import: @import '~bootstrap/dist/css/bootstrap.css';
  or angular.json import: "./node_modules/bootstrap/dist/css/bootstrap.min.css",

//-- install jQuery --//
- npm install jquery --save
- npm insstall @types/jquery --save-dev
- angular.json import: "./node_modules/jquery/dist/jquery.min.js"

//-- install ngx-bootstrap --//
- npm install ngx-bootstrap --save