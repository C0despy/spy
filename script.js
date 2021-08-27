let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}
$(document).ready(function() {


  $(window).on('scroll load', function() {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $('.portfolio .button-container .btn').click(function() {

    let filter = $(this).attr('data-filter');

    if (filter == 'all') {
      $('.portfolio .image-container .box').show('400')
    } else {
      $('.portfolio .image-container .box').not('.' + filter).hide('200');
      $('.portfolio .image-container .box').filter('.' + filter).show('400');
    }

  });

  $('#theme-toggler').click(function() {
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function(e) {

    e.preventDefault();

    $('html, body').animate({

        scrollTop: $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
    );

  });

});