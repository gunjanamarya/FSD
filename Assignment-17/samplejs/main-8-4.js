window.onload = function () {
    var input_num = prompt("Enter a guess number");
    var random = Math.floor(Math.random() * 10 + 1);
    // console.log(random)
    if (input_num === random)
        this.document.getElementById('match-result').innerHTML = 'Good Work';
    else
        this.document.getElementById('match-result').innerHTML = 'Not Matched';
}