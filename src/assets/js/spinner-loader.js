(function () {
    'use strict'
    $(document).ready(function () {
        $('.modal-spinner').modal('show');
        setTimeout(function () {
            $('.modal-spinner').modal('hide');
        }, 500);
    });
})()