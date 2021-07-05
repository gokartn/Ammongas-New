function callrawGas(url, name) {
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

    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa(auth.username + ":" + auth.password));
    xhr.onload = function () {
        let rawJSON = JSON.parse(this.response)
        try {

            let rawData = rawJSON[0];
            if (rawData.last_value == null || rawData.last_value <= 0) {
                console.log(name + " Data last value = null or less than zero");

                let rawCurrProd = 000;
                rawGauge.value = rawCurrProd;
                localStorage.setItem(name + 'CurrentGauge', rawCurrProd)
            } else {
                let rawCurrProd = Math.floor(rawData.last_value);
                localStorage.setItem(name + 'CurrentGauge', rawCurrProd)

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

//Get total production
function callRawTotal(url, name) {
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

    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa(auth.username + ":" + auth.password));
    xhr.onload = function () {
        let rawTotalJSON = JSON.parse(this.response)
        try {

            let rawTotal = rawTotalJSON[0];
            if (rawTotal.last_value == null || rawTotal.last_value <= 0) {
                console.log(name + "TotalData last value = null or less than zero");
                let rawTotalProd = 0;
                localStorage.setItem(name + 'TotalGauge', rawTotalProd)
            } else {

                let rawTotalProd = rawTotal.last_value;
                localStorage.setItem(name + 'TotalGauge', rawTotalProd)
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

//Get total production for yesterday
function callRawYesterday(url, name) {
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

    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa(auth.username + ":" + auth.password));
    xhr.onload = function () {
        let rawTotalYesterdayJSON = JSON.parse(this.response)
        try {

            let rawTotalYesterday = rawTotalYesterdayJSON[0];
            if (rawTotalYesterday.last_value == null || rawTotalYesterday.last_value <= 0) {
                console.log(name + " Total Yesterday Data last value = null or less than zero");
                let rawTotalYesterdayProd = 0;
                localStorage.setItem(name + 'TotalYesterdayGauge', rawTotalYesterdayProd)
            } else {

                let rawTotalYesterdayProd = rawTotalYesterday.last_value;
                localStorage.setItem(name + 'TotalYesterdayGauge', rawTotalYesterdayProd)
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

//Get Total for today since midnight
function callRawToday(url, name) {
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


    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa(auth.username + ":" + auth.password));
    xhr.onload = function () {
        let rawTotalTodayJSON = JSON.parse(this.response)
        try {

            let rawTotalToday = rawTotalTodayJSON[0];
            if (rawTotalToday.last_value == null || rawTotalToday.last_value <= 0) {
                console.log(name + "TotalTodayData last value = null or less than zero");
                let rawTotalTodayProd = 0;
                localStorage.setItem(name + 'TotalTodayGauge', rawTotalTodayProd)
            } else {
                rawTotalTodayProd = rawTotalToday.last_value;
                localStorage.setItem(name + 'TotalTodayGauge', rawTotalTodayProd)
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

function callOEERequest(url, name) {
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


    var method = 'GET';
    var xhr = createCORSRequest(method, url);
    xhr.setRequestHeader("Authorization", "Basic " + btoa(auth.username + ":" + auth.password));
    xhr.onload = function () {
        var OEEJSON = JSON.parse(this.response)
        try {
            let OEEData = OEEJSON[0];
            if (OEEData.last_value == null || OEEData.last_value <= 0) {
                let oEEHour = 0;
                console.log(name + "OEEHour is 0 or null");
                localStorage.setItem(name + 'OEEValue', oEEHour)
            } else {
                let oEEHour = OEEData.last_value;
                localStorage.setItem(name +'OEEValue', oEEHour)
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