// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

$("#get-test").click(function(){
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=oxZ-B6hmqgo&key=AIzaSyDgUaMVBoz1srC9Bi_sdkrqUCyWkpnfYwc",
  }).done(function(response){
    $("#this").append("<br> " + response.items[0].snippet.title + " <br> " + response.items[0].snippet.description)
  });

});


  $(".video-block")
    .mouseenter(function(){
      $(".info-box").show();
      var boxPos = {};
      $(document).mousemove(function(e){
        boxPos.left = (e.pageX - $(window).scrollLeft());
        boxPos.top = (e.pageY - $(window).scrollTop() - $(".info-box").height());
      $(".info-box").css("left", boxPos.left);
      $(".info-box").css("top", boxPos.top);
      // console.log(boxPos);
      });
    })
    .mouseleave(function(){
    $(".info-box").hide();
  })

  var oldGlow
  var oldColor
$(".nav-item")
  .mouseenter(function(){
  oldGlow = $(this).css("text-shadow");
  oldColor = $(this).css("color");
  $(this).css("text-shadow", "0px 0px 10px white");
  $(this).css("color", "white");
})
  .mouseleave(function(){
  $(this).css("text-shadow", oldGlow);
  $(this).css("color", oldColor);
  })



});
