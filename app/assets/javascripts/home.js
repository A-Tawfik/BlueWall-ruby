// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){


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




});
