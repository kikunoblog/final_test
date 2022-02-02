// 横からスライド
//if (window.matchMedia('(max-width: 1024px) and (min-width:320px)').matches) {
/* ウィンドウサイズ320以上、以下の処理を記述 */
$(function () {
  $(".p-header__menu").on("click", function () {
    $(".p-sidebar ").toggleClass("is-open");
    $(".l-container").toggleClass("is-open2");
    $("body").toggleClass("fixed");
  });

  $(".p-menu-trigger").on("click", function () {
    //openクラスの要素を削除
    $(".p-sidebar").removeClass("is-open");
    $(".l-container").removeClass("is-open2");
    $("body").toggleClass("fixed");
  });
});
