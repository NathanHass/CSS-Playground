/*
 * Do your jorvascrompts here!
 */


$('.anim-trigger').click(function() {
  var toggleText = $('.body').hasClass('is-active') ? 'Add Active Class' : 'Remove Active Class';
  $('.body').toggleClass('is-active');
  $(this).text(toggleText)
})

window.onload = function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    keyboardControl: true,
    slideActiveClass: 'is-active'
  })
};
