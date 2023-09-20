$(document).ready(function () {
  $('.modal-open, .js-open-menu').on('click', function () {
    $('body').css('overflow', 'hidden');
    $('.modal').fadeIn();
  });
  $('.modal-close').on('click', function () {
    $('body').css('overflow', 'auto');
    $('.modal, .js-close-menu').fadeOut();
  });
});
