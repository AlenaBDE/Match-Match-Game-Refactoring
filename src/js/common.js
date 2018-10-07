export function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}


export function loadForms(url, formSelector, callback) {
    $.ajax({
        url: url,
        type: 'HEAD',
        error: function () {
            //file not exists
        },
        success: function () {
            $('#windows').empty();
            $('#windows').load(url + ' #' + formSelector, '', callback);
        }
    })
}




