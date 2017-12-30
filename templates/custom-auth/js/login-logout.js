$(document).ready(function () {

    var getUrlParams = function (url) {
        var params = {};
        (url + '?').split('?')[1].split('&').forEach(function (pair) {
            pair = (pair + '=').split('=').map(decodeURIComponent);
            if (pair[0].length) {
                params[pair[0]] = pair[1];
            }
        });
        return params;
    };

    var params = getUrlParams(document.location);

    if (params.login === 'true') {
        $('#login-modal').modal('show');
    }

    if (params.register === 'true') {
        $('#register-modal').modal('show');
    }

    if (params["login-status"]) {
        setTimeout(function () {

            if (params["login-status"] === 'true') {
                $('#snackbar').text(params["login-msg"]).css('border-bottom', '6px solid green');
            } else {
                $('#snackbar').text(params["login-msg"]).css('border-bottom', '6px solid red');
            }

            $('#snackbar').addClass('show');
            $('#snackbar').css('text-align', 'center');

            setTimeout(function () {
                $('#snackbar').removeClass('show');
            }, 3000);
        }, 1000);
    }

    if (params["register-status"]) {
        setTimeout(function () {

            if (params["register-status"] === 'true') {
                $('#snackbar').text(params["register-msg"]).css('border-bottom', '6px solid green');
            } else {
                $('#snackbar').text(params["register-msg"]).css('border-bottom', '6px solid red');
            }

            $('#snackbar').addClass('show');
            $('#snackbar').css('text-align', 'center');

            setTimeout(function () {
                $('#snackbar').removeClass('show');
            }, 3000);
        }, 1000);
    }

    $('#login').click(function () {
        $('#register-modal').modal('show');
    });

    $('#btn-login-modal').click(function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/login/',
            data: $('#modal-login').serialize(),
            success: function (data) {
                history.pushState({}, null, window.location.origin +
                    window.location.pathname + "?login-status=" + data.status + "&login-msg=" + data["login-msg"]);
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#snackbar').text("Server Issue").css('border-bottom', '6px solid red');
                $('#snackbar').addClass('show');

                setTimeout(function () {
                    $('#snackbar').removeClass('show');
                }, 5000);
            }
        });

    });

    $('#btn-register-modal').click(function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/register/',
            data: $('#modal-register').serialize(),
            success: function (data) {
                history.pushState({}, null, window.location.origin +
                    window.location.pathname + "?register-status=" + data.status + "&register-msg=" + data["register-msg"]);
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#snackbar').text("Server Issue").css('border-bottom', '6px solid red');
                $('#snackbar').addClass('show');

                setTimeout(function () {
                    $('#snackbar').removeClass('show');
                }, 5000);
            }
        });

    });

    $('#logout').click(function () {
        swal({
                title: "Are you sure?",
                text: "We Will Gonna Miss You!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Logout!",
                closeOnConfirm: false
            },
            function () {
                swal("Success", "You Are Successfully Logout.", "success");
                setTimeout(function () {
                    window.location.href = '/logout';
                }, 1000);
            });
    });

    $('#feedback-form').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/login/',
            data: $('#feedback-form').serialize(),
            success: function (data) {
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('fail');
            }
        });

    });

    history.pushState({}, null, window.location.origin + window.location.pathname);
});