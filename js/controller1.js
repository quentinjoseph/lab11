var app=angular.module('redMod');

app.controller('controller1', function($scope, services){
$scope.redditPostsFinal =[];
var savPost = [];
var img=angular.element(img);
$scope.goAway = function(index){
  console.log('yo');
  $scope.savPost.splice(index,1);

}
$scope.saveIT= function(post){
  if (img.hasClass('saved')){
    $scope.savPost.pop();
    console.log(savPost);
  }else{
    savPost.push({title: post.title, url: post.url});
    console.log(savPost);
  }

}
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
