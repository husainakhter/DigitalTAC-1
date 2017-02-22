(function() {
  'use strict';
  
  function closeMenu() {
    if($('.menu').hasClass('menu--on')){
      $('.menu').removeClass('menu--on');
      document.body.classList.toggle('background--blur');
    }
  }

  $('html').on('click touchstart', '.hamburger', function(e){
    document.body.classList.toggle('background--blur');
    $('.menu').toggleClass('menu--on');
  });


  $('html').on('click touchstart', '.overlay-for-menu', function(e){
    if( e.target.className === "overlay-for-menu" ) {
      closeMenu();
     }
  });

  $('html').on('click touchstart', '.logout-link', function(e){
    if ($(e.target).hasClass('logout-link')) {
      window.location.href = "login.html";
    }
	});
  
  $('html').on('click touchstart', '.cancel-link', function(e){
    closeMenu();
	});

})();