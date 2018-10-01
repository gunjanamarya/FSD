window.onload = function () {
    document.getElementById('sub-btn').addEventListener('click', function () {
        var num = document.getElementById('num-field').value;
        var avail_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var str = "";
        for (var i = 0; i < num; i++) {
            str += (avail_chars.charAt(Math.floor(Math.random() * avail_chars.length)));
        }
        document.getElementById('result').innerHTML = str;
    })
}