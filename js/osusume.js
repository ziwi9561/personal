$(document).ready(function(){

    const articles = $('.osusue-wrapper article');
    const buttons = $('#osusume-button li');

    buttons.click(function () {
    const index = $(this).index();


    // 顯示對應文章
    articles.eq(index).show();

    // 切換按鈕樣式
    $(this).addClass('clicked').siblings().removeClass('clicked');

    });

  // 預設只顯示第一個 article
    articles.hide().eq(0).show();
    
})