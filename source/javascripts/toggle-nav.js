function toggleNav(){
  var navTrigger = document.querySelector(".menu-trigger"),
    navMenu = document.querySelector(".layout-nav");

  function showHideNav(e){
    e.preventDefault();
    navMenu.classList.toggle("is-nav-open");
  }

  navTrigger.addEventListener("click", showHideNav);
}

toggleNav();
