window.onload = function () {
    document.getElementById('sub-btn').addEventListener('click', function () {
        var text = document.getElementById('text-field').value;
        if (text.length >= 3) {
            document.getElementById('result').innerHTML = text.slice(-3).repeat(4);
        }
        else {
            document.getElementById('result').innerHTML = 'false'
        }
    })
}