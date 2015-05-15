/*
 * Do your jorvascrompts here!
 */


$('.anim-trigger').click(function() {
  var toggleText = $('.body').hasClass('is-active') ? 'Add Active Class' : 'Remove Active Class';
  $('.body').toggleClass('is-active');
  $(this).text(toggleText)
})
