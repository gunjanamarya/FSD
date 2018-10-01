var num1, num2;

function getElements() {
    var form_elements = document.getElementById('calcForm');
    num1 = form_elements[0].value;
    num2 = form_elements[1].value;
}

window.onload = function () {
    document.getElementById('mult-btn').addEventListener('click', function (event) {
        getElements();
        // console.log(num1, num2)
        document.getElementById('result').innerHTML = +num1 * +num2;
    })

    document.getElementById('div-btn').addEventListener('click', function (event) {
        getElements();
        // console.log(num1, num2)
        var result = num2 != 0 ? +num1 / +num2 : 'Division not possible';
        document.getElementById('result').innerHTML = result;
    })
}