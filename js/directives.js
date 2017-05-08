var app=angular.module('redMod');

app.directive('content', function() {
  return {
restrict: 'AEC',
templateUrl: 'content.html',
replace: false
  }
});
