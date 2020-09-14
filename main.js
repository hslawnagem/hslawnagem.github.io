console.log("MAIN");
//------STICKY NAV BAR-----------------------------------------------
// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction2();
// };
// function myFunction2() {
//   // Get the navbar
//   var navbar = document.getElementById("top-nav-bar");
//   console.log("FUNCTION2: " + navbar);
//   // Get the offset position of the navbar
//   var sticky = navbar.offsetTop;
//   // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// } REMOVED HTML: onscroll="myFuntion2()"
//------------------------------------------------------------------
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function responsiveNav() {
//   var x = document.getElementById("top-nav-bar");
//   console.log(x);
//   if (x.className === "nav-bar") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-bar";
//   }
// }
//------------------------------------------------------------------
window.onload = function () {
  Particles.init({
    selector: ".background",
    color: "#DA0463",
  });
};
//----------------------------------------------------------------------
let navbar;
let navbarToggle;

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

function toggleNavBar() {
  navbar = document.getElementById("navbar");
  console.log(navbar);
  navbarToggle = navbar.querySelector(".navbar-toggle");

  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
}

// navbarToggle.addEventListener("click", () => {
//   if (navbar.classList.contains("opened")) {
//     closeMobileNavbar();
//   } else {
//     openMobileNavbar();
//   }
// });

// var navbarMenu = navbar.querySelector(".navbar-menu");
// var navbarLinksContainer = navbar.querySelector(".navbar-links");

// navbarLinksContainer.addEventListener("click", (clickEvent) => {
//   clickEvent.stopPropagation();
// });
