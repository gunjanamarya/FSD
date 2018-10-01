window.onload = function () {
    document.getElementById('sub-btn').addEventListener('click', function () {
        var text = document.getElementById('text-field').value;
        var res = text.split("").sort().join("");
        document.getElementById('result').innerHTML = res;
    })
}