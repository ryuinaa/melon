/*이미지 슬라이드*/
$(function(){
  console.log(1);
  setInterval(function(){
      $(".slide ul").animate({left:"-236"},1000,function(){
          $(".slide li").eq(0).appendTo(".slide ul");
          $(".slide ul").css("left",0);
      });
  },4000);
});