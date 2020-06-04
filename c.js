var images = ["wp/138518.jpg","wp/138525.jpg","wp/138559.jpg","wp/32819.jpg","wp/32822.jpg","wp/138526.jpg"];
var i = 0;
var el = $(".viewer");

if(!images){
  console.error("No Images!");
}
v = images.length - 1;

console.log("There are " + (v+1) +" images.");


$("#rb").on("click", function(){
if(i < v)
{
  i = i + 1;
  el.css('background-image', 'url('+images[i]+')');
}
else if(i == v)
{
  i=0;
  el.css('background-image', 'url('+images[i]+')');
}
});



$("#lb").on("click", function(){
if(i > 0)
{
  i = i - 1;
  el.css('background-image', 'url('+images[i]+')');
}
else if(i == 0)
{
  i = v;
  el.css('background-image', 'url('+images[i]+')');
}
});
