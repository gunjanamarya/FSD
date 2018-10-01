window.onload = function () {
    document.getElementById('sub-btn1').addEventListener('click', function () {
        var para = document.getElementById('para');
        para.style.color = '#0000FF';
        para.style.fontFamily = 'Courier New';
        para.style.fontSize = '20px'
    })

    document.getElementById('sub-btn2').addEventListener('click', function () {
        var first = document.getElementById('first').value;
        var last = document.getElementById('last').value;
        document.getElementById('result2').innerHTML = 'First Name : ' + first + ', Last Name : ' + last;
    })

    document.getElementById('sub-btn3').addEventListener('click', function () {
        document.getElementById('para').style.background = '#00FF00';
    })

    document.getElementById('sub-btn4').addEventListener('click', function () {
        var link = document.getElementById('link');
        var href = link.getAttribute('href');
        var hreflang = link.getAttribute('hreflang');
        var rel = link.getAttribute('rel');
        var target = link.getAttribute('target');
        var type = link.getAttribute('type');
        var result = 'href : ' + href + ', hreflang : ' + hreflang + ', rel : ' + rel + ', target : ' + target + ', type : ' + type;
        document.getElementById('result4').innerHTML = result;
    })

    document.getElementById('sub-btn5').addEventListener('click', function () {
        var tab = document.getElementById('tab5');
        var row = tab.insertRow(4);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        cell0.innerHTML = 'Phoebe';
        cell1.innerHTML = 'Buffay';
    })

    document.getElementById('sub-btn6').addEventListener('click', function () {
        var row = document.getElementById('row').value;
        var col = document.getElementById('col').value;
        var data = document.getElementById('data').value;
        var temp = document.getElementById('tab6').rows[row].cells;
        temp[col].innerHTML = data;
    })

    document.getElementById('sub-btn7').addEventListener('click', function () {
        var row = document.getElementById('no_row').value;
        var col = document.getElementById('no_col').value;
        var tab = document.getElementById('tab7')
        var r, c;
        for (var i = 0; i < row; i++) {
            r = tab.insertRow(i);
            for (var j = 0; j < col; j++) {
                c = r.insertCell(j)
                c.innerHTML = 'Row-' + i + ' Column-' + j;
            }
        }
    })

    document.getElementById('sub-btn8').addEventListener('click', function () {
        var select = document.getElementById('dropdown');
        select.remove(select.selectedIndex);
    })
}