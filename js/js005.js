function Run() {
    console.log('run...');

    // 產生一張圖片
    var $img = $('<img>');

    // 設定 src 屬性
    $img.attr('src', './img/p02.jpg');
    // 設定 class 樣式
    $img.attr('class', 'img-thumbnail');

    // DOM Insertion, Inside
    // https://api.jquery.com/appendTo/
    $img.appendTo('#output');
}



$('#run').bind('click', Run);