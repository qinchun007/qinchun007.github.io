function showImg(index) {

    // 取得第index的影像
    var img = $('img')[index];
    var $img = $('img:eq(' + index +')');
    //若 img 有 visible 屬性則隱藏，否則顯示
    if ($img.is(':visible')) {
        $img.hide();
    } else {
        $img.show();
    }
}


function Run() {
    console.log('run...');

    // 取得使用者選擇的數值
    var index = $('#image_idx').val();

    showImg(index);

}

$('#run').bind('click', Run);