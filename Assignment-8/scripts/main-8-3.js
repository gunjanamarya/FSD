window.onload = function () {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    document.getElementById('format1').innerHTML = month + '-' + day + '-' + year
    document.getElementById('format2').innerHTML = month + '/' + day + '/' + year
    document.getElementById('format3').innerHTML = day + '-' + month + '-' + year
    document.getElementById('format4').innerHTML = day + '/' + month + '/' + year
}