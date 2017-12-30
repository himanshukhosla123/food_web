var messages = [];
var socket = io.connect(location.protocol + "//" + location.hostname + ':3700');

function getIconURl(mode) {
    var url = null;

    if (mode === 'Card') {
        url = '/static/icons/card.png';
    } else if (mode === 'Paytm') {
        url = '/static/icons/paytm.png';
    } else if (mode === 'Cash') {
        url = '/static/icons/cash.png';
    }

    return url;
}

function getCurrentTime() {
    var CurrentDate = moment().format('h:mm a');
    return CurrentDate;
}


var textFile = null,
makeTextFile = function (text) {
  var data = new Blob([text], {type: 'text/plain'});

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  return textFile;
};

socket.on('order', function (data) {
    var data = JSON.parse(data);

    var template = '<div class="notification new">\n' +
        '<div class="not_icon">\n' +
        '<img src="/static/icons/order.png"\n' +
        'class="responsive img-circle" alt="">\n' +
        '<div class="time">' + getCurrentTime() + '</div>\n' +
        '</div>\n' +
        '<div class="not_desc">\n' +
        '<h5>' + data.title + '</h5>\n' +
        '<p>' + data.message + '</p>\n' +
        '</div>\n' +
        '</div>';

    $('.not_container').prepend(template);

	var xml=data.xml;
    var a = document.createElement('a');
    a.href = makeTextFile(xml);
    a.download = 'Order-'+new Date().toLocaleTimeString()+'.xml';
    a.click();

    $('#all-table-' + data.table_number).css('background-color', '#FFFF00');
    $('#all-table-' + data.table_number).attr('name', data.cart_id);
    $('#all-table-' + data.table_number).attr('data-order-id', data.order_id);

    var audio = new Audio('/static/notification.mp3');
    audio.play();
});


socket.on('waiter', function (data) {
    var data = JSON.parse(data);


    var template = '<div class="notification new">\n' +
        '<div class="not_icon">\n' +
        '<img src="/static/icons/alert.png"\n' +
        'class="responsive img-circle" alt="">\n' +
        '<div class="time">' + getCurrentTime() + '</div>\n' +
        '</div>\n' +
        '<div class="not_desc">\n' +
        '<h5>' + data.title + '</h5>\n' +
        '<p>' + data.message + '</p>\n' +
        '</div>\n' +
        '</div>';

    $('.not_container').prepend(template);
    var audio = new Audio('/static/notification.mp3');
    audio.play();
});


socket.on('payment', function (data) {
    var data = JSON.parse(data);


    var template = '<div class="notification new">\n' +
        '<div class="not_icon">\n' +
        '<img src="' + getIconURl(data.mode) + '"\n' +
        'class="responsive img-circle" alt="">\n' +
        '<div class="time">' + getCurrentTime() + '</div>\n' +
        '</div>\n' +
        '<div class="not_desc">\n' +
        '<h5>' + data.title + '</h5>\n' +
        '<p>' + data.message + '</p>\n' +
        '</div>\n' +
        '</div>';

    $('.not_container').prepend(template);
    var audio = new Audio('/static/notification.mp3');
    audio.play();
});