angular
.module('jeopardy')
.directive('jeopardyReader', function(){
  return{
    templateUrl:'../templates/question.html',
    restrict:'AE',
    scope:{
      question: '='
    }
  }
})
