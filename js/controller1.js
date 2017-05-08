var app=angular.module('redMod');

app.controller('controller1', function($scope, services){
$scope.redditPostsFinal =[];
$scope.getReddit = function(name){
// console.log($scope.name);
$scope.redditPostsFinal.splice(0, 27);
var subName=$scope.name;
// $scope.posts =[];
services.pullReddits(subName).then(function(){
  $scope.redditPostsFinal = services.redditStuff();
console.log($scope.redditPostsFinal);
});
// $scope.reddits=redditPostsFinal;
// console.log($scope.reddits);
};

$scope.toggle = false;
});
