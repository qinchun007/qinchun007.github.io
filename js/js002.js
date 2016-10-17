function sayHello()
{
    var str=$("#input").val();
    $("#output").text(str);

}
$("#test").bind('click',sayHello);