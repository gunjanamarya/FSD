window.onload = function () {
    document.getElementById('sub-btn').addEventListener('click', function () {
        var arr = document.getElementById('text-field').value.split(',');
        if (arr && arr.length >= 1) {
            var first = arr[0];
            var last = arr[arr.length - 1]
            arr[0] = last;
            arr[arr.length - 1] = first;
            document.getElementById('result').innerHTML = arr;
        }
    })
}