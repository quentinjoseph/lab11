$(function(){
// lightbox.init();


$('#subButton').on('click', function(){
  var subSearch =$('#subFind').val();
  $('.row').remove();
  searchReddit(subSearch);
});


function searchReddit(subSearch){

$.get('https://www.reddit.com/r/'+subSearch+'/.json').done(function(stuff){
console.log(stuff.data.children);
for (var i=0; i<stuff.data.children.length; i++){
var title = stuff.data.children[i].data.title;
var thumb = stuff.data.children[i].data.thumbnail;
var url = stuff.data.children[i].data.url;
// console.log(stuff.data.children[i].data.thumbnail);

if(thumb !== "self") {

  $('.container').append('<div class="row"><div class="col-xs-2"></div><div class="col-xs-2 thumbsDiv"><a class="storyLinks bigThumb link-'+i+'" href= "'+thumb+'"data-fancybox data-caption="'+title+'" data-width="600" data-height="300"><img class ="pics" src="' + thumb + '"></a></div><div class= "col-xs-6 stories"><img class="qpng qbutton-'+i+'" src="images/q.png"><a class="storyLinks" href= "'+url+'" target="_blank"><p class="titleStyle">'+title+'</p></a></div><div class="dividers"></div><div class="col-xs-2 last"></div></div>');
  // $('.storedList').append('<li class="showHide"><a href="'+url+'">'+title+'</a></li>')
  // $('.thumbs').append('<div class="thumbsDiv"><img class ="pics" src=' + thumb + '></div>')

}
// for loop end
}
$('.qpng').on('click',function(){
  $(this).toggleClass('saved');
  $(this).parent().toggleClass('stored');
var st1 = $('.stored').val();
  // var storePic=$('.stored');
  console.log(st1);

});
$('.stories').hide().fadeIn(2000);
$('.pics').hide().fadeIn(2000);


// get() closing
});
// function closing
};





// End
});
