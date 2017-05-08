var app=angular.module('redMod');

app.factory('services', function($http){

  var redditStuff=[];

  return {
        pullReddits: function(subName){
          var promise = $http({
            method: 'GET',
            url: 'https://www.reddit.com/r/'+subName+'/.json'
          }).then(function goodCallBack(response){
            var reddPost=response.data.data.children;
            for (var i=0; i<reddPost.length; i++){
            var title = reddPost[i].data.title;
            var url = reddPost[i].data.url;
            var urlComments = reddPost[i].data.permalink;
            var thumb = reddPost[i].data.thumbnail;
            var ups = reddPost[i].data.ups;

            var reddObj ={
              title: title,
              thumb: thumb,
              url: url,
              urlComments: urlComments,
              ups: ups
            };
            if((thumb === "self")||(thumb === "default")||(thumb === "image")){
              reddObj.thumb="images/redIcon.png"
            }
            redditStuff.push(reddObj);
            console.log(response);
          }
          // console.log(redditStuff);

          })
          return promise;
        },
        redditStuff: function(){
           return redditStuff;
        }


      }


  // return promise;
//   return{
//     sendReddBack: function(){
//       return redditStuff;
//   }
// }




})
