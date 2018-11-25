window.onload = function () {
    var date = new Date();


    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    document.getElementById('day').innerHTML += days[date.getDay()];
    hrs = date.getHours();

    hrs = hrs >= 12 ? (hrs == 12 ? hrs : hrs - 12) + ' PM' : (hrs == 0 ? hrs + 12 : hrs) + ' AM'
    document.getElementById('time').innerHTML += (hrs + ' : ' + date.getMinutes() + ' :  ' + date.getSeconds())
}