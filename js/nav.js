var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  var previousScroll = 0, // previous scroll position
    menuOffset = 54, // height of menu (once scroll passed it, menu is hidden)
    detachPoint = 650, // point of detach (after scroll passed it, menu is fixed)
    hideShowOffset = 6; // scrolling value after which triggers hide/show menu

  // on scroll hide/show menu
  $(window).scroll(function () {
    if (!$("nav").hasClass("expanded")) {
      var currentScroll = $(this).scrollTop(), // gets current scroll position
        scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling

      // if scrolled past menu
      if (currentScroll > menuOffset) {
        // if scrolled past detach point add class to fix menu
        if (currentScroll > detachPoint) {
          if (!$("nav").hasClass("detached")) $("nav").addClass("detached");
        }

        // if scrolling faster than hideShowOffset hide/show menu
        if (scrollDifference >= hideShowOffset) {
          if (currentScroll > previousScroll) {
            // scrolling down; hide menu
            if (!$("nav").hasClass("invisible")) $("nav").addClass("invisible");
          } else {
            // scrolling up; show menu
            if ($("nav").hasClass("invisible"))
              $("nav").removeClass("invisible");
          }
        }
      } else {
        // only remove "detached" class if user is at the top of document (menu jump fix)
        if (currentScroll <= 0) {
          $("nav").removeClass();
        }
      }

      // if user is at the bottom of document show menu
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        $("nav").removeClass("invisible");
      }

      // replace previous scroll position with new one
      previousScroll = currentScroll;
    }
  });

  // checks if navigation’s popover is shown
  function showHideNav() {
    if ($("nav").hasClass("expanded")) {
      hideNav();
    } else {
      showNav();
    }
  }

  // shows the navigation’s popover
  function showNav() {
    $("nav").removeClass("invisible").addClass("expanded");
    $("#container").addClass("blurred");
    window.setTimeout(function () {
      $("body").addClass("no_scroll");
    }, 200); // Firefox hack. Hides scrollbar as soon as menu animation is done
    $("#navigation a").attr("tabindex", ""); // links inside navigation should be TAB selectable
  }

  // hides the navigation’s popover
  function hideNav() {
    $("#container").removeClass("blurred");
    window.setTimeout(function () {
      $("body").removeClass();
    }, 10); // allow animations to start before removing class (Firefox)
    $("nav").removeClass("expanded");
    $("#navigation a").attr("tabindex", "-1"); // links inside hidden navigation should not be TAB selectable
    $(".icon").blur(); // deselect icon when navigation is hidden
  }

  // shows/hides navigation’s popover if class "expanded"
  $(".navbar-toggle").on("click touchstart", function (event) {
    showHideNav();
    event.preventDefault();
  });

  // clicking anywhere inside navigation or heading won’t close navigation’s popover
  $("#navigation").on("click touchstart", function (event) {
    event.stopPropagation();
  });

  // keyboard shortcuts
  $("body").keydown(function (e) {
    // menu accessible via TAB as well
    if ($("nav .navbar-toggle").is(":focus")) {
      // if ENTER/SPACE show/hide menu
      if (e.keyCode === 13 || e.keyCode === 32) {
        showHideNav();
        e.preventDefault();
      }
    }

    // if ESC show/hide menu
    if (e.keyCode === 27 || e.keyCode === 77) {
      showHideNav();
      e.preventDefault();
    }
  });
}
/*
     FILE ARCHIVED ON 14:38:54 Apr 17, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:58:46 Mar 15, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 82.682
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.06
  cdx.remote: 0.056
  esindex: 0.008
  LoadShardBlock: 59.669 (3)
  PetaboxLoader3.datanode: 642.83 (5)
  load_resource: 921.796 (2)
  PetaboxLoader3.resolve: 290.576 (2)
*/
