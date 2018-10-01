window.onload = function () {
    document.getElementById('sub-btn').addEventListener('click', function () {
        var str = document.getElementById('text-field').value;
        var s1, longest_substring = "", special_char = '*()+.?[|\\';
        for (var i = 0; i < str.length; i++) {
            s1 = str[i];
            for (var j = i + 1; j < str.length; j++) {
                s1 += str[j];
                for (var k = 0; k < s1.length; k++) {
                    var temp1 = s1[k];
                    if (special_char.indexOf(s1[k]) != -1) {
                        temp1 = "\\" + s1[k];
                    }
                    var temp2 = new RegExp(temp1, "g");
                    if (s1.match(temp2).length > 1) {
                        break;
                    }
                }
                if (k != s1.length) {
                    break;
                }
                if (longest_substring.length < s1.length) {
                    longest_substring = s1;
                }
            }
        }
        document.getElementById('result').innerHTML = longest_substring;
    })
}