
angular
 .module('jeopardy')
 .service('ApiJepService',function($http,$q) {

var categoryOne = 'category?id=11521';
var categoryTwo = 'category?id=11548';
var categoryThree = 'category?id=11566';
var categoryFour = 'category?id=11560';
var categoryFive = 'category?id=11582';
var categorySix = 'category?id=11531';
var url = 'http://jservice.io/api/'


function getCategoryOne() {
 return $http.get(url + categoryOne);
};
function getCategoryTwo() {
 return $http.get(url + categoryTwo);
};
function getCategoryThree() {
 return $http.get(url + categoryThree);
};
function getCategoryFour() {
 return $http.get(url + categoryFour);
};
function getCategoryFive() {
 return $http.get(url + categoryFive);
};
function getCategorySix() {
 return $http.get(url + categorySix);
};
return {
  getCategoryOne: getCategoryOne,
  getCategoryTwo: getCategoryTwo,
  getCategoryThree: getCategoryThree,
  getCategoryFour: getCategoryFour,
  getCategoryFive: getCategoryFive,
  getCategorySix: getCategorySix
}
})
