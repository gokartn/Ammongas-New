var blabjergData;
var blabjergCurrProd = 0;
var blabjergTotalprod = 0;
var blabjergTotal;

function callBlabjerg() {
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


    var url = 'https://system.aldaq.com/api/data/logger/150/point/16317';
    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa("mortenjensen1994-gma:er9recs1qId6L9AT5WZM"));
    xhr.onload = function () {
        blabjergJSON = JSON.parse(this.response)
        try {
            if (blabjergJSON != null)
                blabjergData = blabjergJSON[0];
            if (blabjergData.last_value == null || blabjergData.last_value <= 0) {
                console.log("blabjergData last value = null or less than zero");

                blabjergCurrProd = 000;
                blabjergGauge.value = blabjergCurrProd;
                localStorage.setItem('blabjergCurrentGauge', blabjergCurrProd)
            } else {
                blabjergCurrProd = Math.floor(blabjergData.last_value);
                localStorage.setItem('blabjergCurrentGauge', blabjergCurrProd);
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
//Get total production
function callBlabjergTotal() {
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


    var url = 'https://system.aldaq.com/api/data/logger/126/point/12083';
    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa("mortenjensen1994-gma:er9recs1qId6L9AT5WZM"));
    xhr.onload = function () {
        var blabjergTotalJSON = JSON.parse(this.response)
        try {

            blabjergTotal = blabjergTotalJSON[0];
            if (blabjergTotal.last_value == null || blabjergTotal.last_value <= 0) {
                console.log("blåbjergTotalData last value = null or less than zero");
                blabjergTotalprod = 000;
                localStorage.setItem('blabjergTotalGauge', blabjergTotalprod)
            } else {

                blabjergTotalprod = blabjergTotal.last_value;
                localStorage.setItem('blabjergTotalGauge', blabjergTotalprod)

            }

        } catch (Error) {
            console.log(Error);
        }
    };

    xhr.onerror = function () {
        // Error code goes here.
    };
    xhr.send()
}*/
