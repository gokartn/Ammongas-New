var olData = 0;
var olCurrProd = 0;
var olTotalProd = 0;
var olTotal = 0;

function callOl() {
    var createCORSRequest = function (method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // Most browsers.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // IE8 & IE9
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    };

    //URL mangler!
    var url = 'https://system.aldaq.com/api/data/logger/152/point/16717';
    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa("mortenjensen1994-gma:er9recs1qId6L9AT5WZM"));
    xhr.onload = function () {
        olJSON = JSON.parse(this.response)
        try {
            if (olJSON != null)
                olData = olJSON[0];
            if (olData.last_value == null || olData.last_value <= 0) {
                console.log("olData last value = null or less than zero");

                olCurrProd = 000;
                olGauge.value = olCurrProd;
                localStorage.setItem('olCurrentGauge', olCurrProd)
            } else {
                olCurrProd = Math.floor(olData.last_value);
                localStorage.setItem('olCurrentGauge', olCurrProd);
            }
        } catch (Error) {
            console.log(Error);
        }
    };

    xhr.onerror = function () {
        // Error code goes here.
    };
    xhr.send()
}
/*
function callOlTotal() {
    var createCORSRequest = function (method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // Most browsers.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // IE8 & IE9
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    };

    //URL mangler
    var url = '';
    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa("mortenjensen1994-gma:er9recs1qId6L9AT5WZM"));
    xhr.onload = function () {
        olData = JSON.parse(this.response)
        try {

            olTotal = olTotalJSON[0];
            if (olTotal.last_value == null || olTotal.last_value <= 0) {
                console.log("blåbjergTotalData last value = null or less than zero");
                olTotalprod = 000;
                localStorage.setItem('olTotalGauge', olTotalprod)
            } else {

                olTotalprod = olTotal.last_value;
                localStorage.setItem('olTotalGauge', olTotalprod)

            }

        } catch (Error) {
            console.log(Error);
        }
    };

    xhr.onerror = function () {
        // Error code goes here.
    };
    xhr.send()
}
*/
