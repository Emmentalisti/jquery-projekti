$(document).ready(function() {
  $(".dynamicDiv").hover(
    function() {
      $(this).addClass("hover");
    }, function () {
      $(this).removeClass("hover", 2500);
    });
});
