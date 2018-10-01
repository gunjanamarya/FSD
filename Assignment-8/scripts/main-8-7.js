window.onload = function () {
    document.getElementById('sbt-btn').addEventListener('click', function (event) {
        var text_str = document.getElementById('text-field').value;
        var title_str;
        title_str = text_str.toLowerCase().split(' ').map(function (word) {
            return word.replace(word[0], word[0].toUpperCase());
        }).join(' ')
        document.getElementById('result').innerHTML = title_str
    })
}