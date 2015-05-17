/*
 * Do your jorvascrompts here!
 */

$('.trigger-relative').click(function() {
  var toggleText = $('.body').hasClass('is-relative') ? 'Show Relative Sizes' : 'Hide Relative Sizes';
  $('.body').toggleClass('is-relative');
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
