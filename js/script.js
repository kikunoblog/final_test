// 横からスライド
//if (window.matchMedia('(max-width: 1024px) and (min-width:320px)').matches) {
/* ウィンドウサイズ320以上、以下の処理を記述 */
$(function () {
  $(".js-menu-button").on("click", function () {
    $(".p-sidebar ").toggleClass("is-open p-sidebar_move");
    $(".l-container").toggleClass("is-open cover");
    $("body").toggleClass("fixed");
  });

  $(".js-menu-close-button").on("click", function () {
    //openクラスの要素を削除
    $(".p-sidebar").removeClass("is-open p-sidebar_move");
    $(".l-container").removeClass("is-open cover");
    $("body").toggleClass("fixed");
  });
});
