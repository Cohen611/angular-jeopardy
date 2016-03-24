var angularRoute = require('angular-route');

angular
.module('jeopardy',['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: "templates/index.html",
      controller: "HomeController"
    })
    .when('/question', {
      templateUrl: 'templates/question.html',
      controller: 'QuestionController'
    })
    .when('/404',{
      template: '<h1> You messed up, loser </h1>',
      controller: 'HomeController'
    })
    .otherwise({
       redirectTo: '/404'
    })
})

require('controller/homecontroller');
require('controller/questioncontroller');
require('services/apiservice');
require('services/tinyservice');
require('services/cacheEngineservice');
require('directives/directive');
