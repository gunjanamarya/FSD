window.onload = function () {
    document.getElementById('sub-btn').addEventListener('click', function () {
        var text = document.getElementById('text-field').value;

        var p_occur = text.match(/p/g)
        if (p_occur) {
            p_occur = p_occur.length;
        }
        var s_occur = text.match(/s/g)
        if (s_occur) {
            s_occur = s_occur.length;
        }
        var res = p_occur === s_occur && p_occur !== null && s_occur !== null;
        document.getElementById('result').innerHTML = res;
    })
}