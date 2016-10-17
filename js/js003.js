function BMI() {
    var h = $('#height').val();

    console.log(h);
    var w = $('#weight').val();
    console.log(w);

    h = h / 100.0;
    var bmi = w / (h * h);
    console.log(bmi);
    $('#output').text(bmi);
}

$('#test').bind('click', BMI);