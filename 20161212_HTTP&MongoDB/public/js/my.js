$('#submit').bind('click', function () {
    console.log('按到了喔');
    var email = $('#inputEmail').val();
    console.log(email);
    var password = $('#inputPassword').val();
    $.ajax({
        url: "http://127.0.0.1:12345/json/",
        data: {
            username: email,
            password: password
        },
        success: function () {
            console.log('送出成功');
        },
    });
});