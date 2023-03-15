$(function () {
  $(".navbar-toggle").on("click", function () {
    if ($("nav").hasClass("expanded")) {
      $("nav").removeClass("expanded");
    } else {
      $("nav").addClass("expanded");
    }
  });
});
