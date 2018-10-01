window.onload = function () {

    document.getElementById('sub-btn-long').addEventListener('click', function () {
        var text = document.getElementById('text-field').value;
        var arr = text.split(" ");
        var longest = [arr[0]];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i].length >= longest[0].length) {
                if (arr[i].length == longest[0].length) {
                    longest.push(arr[i])
                }
                else {
                    longest = [];
                    longest[0] = arr[i]
                }
            }
        }
        document.getElementById('result1').innerHTML = longest;
    })

    document.getElementById('sub-btn-unique').addEventListener('click', function () {
        var text = document.getElementById('text-field').value;
        var unique_str = "";
        for (var i = 0; i < text.length; i++) {
            if (unique_str.indexOf(text.charAt(i)) == -1 && text[i] !== " ") {
                unique_str += text[i]
            }
        }
        document.getElementById('result2').innerHTML = unique_str;
    })

    document.getElementById('sub-btn-all').addEventListener('click', function () {
        var text = document.getElementById('text-field').value;
        var unique_str = "";
        var list_obj = {}, temp;
        for (var i = 0; i < text.length; i++) {
            if (unique_str.indexOf(text.charAt(i)) == -1 && text[i] !== " ") {
                unique_str += text[i]
                temp = new RegExp(text[i], "g")
                list_obj[text[i]] = text.match(temp).length;
            }
        }
        document.getElementById('result3').innerHTML = JSON.stringify(list_obj);
    })
}