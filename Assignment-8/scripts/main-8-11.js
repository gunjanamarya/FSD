window.onload = function () {
    document.getElementById('sub-btn').addEventListener('click', function () {
        var num = document.getElementById('num-field').value;
        var arr = num.split("").reverse().join("")
        document.getElementById('result').innerHTML = +arr;
    })
}