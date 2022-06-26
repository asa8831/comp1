$(function () {
  $('.js__spMenu').on('click', function () {
    $(this).toggleClass('active');
    $('.js__nav').toggleClass('active');
    $('body').toggleClass('noscroll');
  });

  $('.js__nav---link').on('click', function(){
    // 一番外側のnav
    $('.js__nav').toggleClass('active');

    // その時ハンバーガーのメニューがバッテンから三本線に戻る
    $('.js__spMenu').toggleClass('active');
  });


});