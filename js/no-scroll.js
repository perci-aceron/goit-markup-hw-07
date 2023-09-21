$(document).ready(function () {
  $('.modal-open, .js-open-menu').on('click', function () {
    $('body').css('overflow', 'hidden');
    $('.modal, .js-menu-container');
  });

  $('.modal-close, .js-close-menu').on('click', function () {
    $('body').css('overflow', 'auto');
    $('.modal, .js-menu-container');
  });
});
