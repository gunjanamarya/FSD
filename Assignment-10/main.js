$(document).ready(function () {

    $('#ipt-txt').on('input', function () {
        console.log('Textbox content changed !!')
    })

    $('#ipt-btn').click(function () {
        $('#ipt-btn').html('New Content')
    })

    $('#ipt-btn-3').click(function () {
        $('#drop-down').append('<option value="op4">Option 4</option>');
        $('#drop-down').append('<option value="op5">Option 5</option>');
        $('#drop-down').append('<option value="op6">Option 6</option>');
        $('#res').html('The drop down now has three more options')
    })

    $('#set-img').click(function () {
        $('#body-bg').css({
            'background-image': 'url(./sample.png)',
            'background-repeat': 'no-repeat',
            'height': '100%',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('u').css('color', 'white')
        $('i').css('color', 'white')
    })

})